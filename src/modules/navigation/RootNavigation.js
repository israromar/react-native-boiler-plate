/* eslint-disable no-nested-ternary */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import AuthStackNavigator from './AuthNavigator';
import AppStackNavigator from './AppNavigator';
import Loading from '../../screens/loading';

// import NavigatorView from './RootNavigation';

import AvailableInFullVersion from '../../modules/availableInFullVersion/AvailableInFullVersionViewContainer';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconCalendar = require('../../../assets/images/drawer/calendar.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconPages = require('../../../assets/images/drawer/pages.png');
const iconComponents = require('../../../assets/images/drawer/components.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');
const iconBlog = require('../../../assets/images/drawer/blog.png');

const drawerData = [
  {
    name: 'Home',
    icon: iconHome,
  },
  {
    name: 'Calendar',
    icon: iconCalendar,
  },
  {
    name: 'Grids',
    icon: iconGrids,
  },
  {
    name: 'Pages',
    icon: iconPages,
  },
  {
    name: 'Components',
    icon: iconComponents,
  },
];

const authState = {
  isLoggedIn: true,
  hasSkippedLogin: true,
  isLoading: true,
  user: {},
};

// export default function NavigatorView(props) {
//   if (authState.isLoggedIn && authState.hasSkippedLogin) {
//     return <AuthStackNavigator {...props} />;
//   }
//   return <AppStackNavigator {...props} />;
// }

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/drawer/user.png')}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={{ color: '#4BC1FD' }}>Johndoe@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {drawerData.map((item, idx) => (
        <DrawerItem
          key={`drawer_item-${idx + 1}`}
          label={() => (
            <View style={styles.menuLabelFlex}>
              <Image style={{ width: 20, height: 20 }} source={item.icon} />
              <Text style={styles.menuTitle}>{item.name}</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate(item.name)}
        />
      ))}
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image style={{ width: 20, height: 20 }} source={iconBlog} />
            <Text style={styles.menuTitle}>Blog</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Blog')}
      />
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image style={{ width: 20, height: 20 }} source={iconSettings} />
            <Text style={styles.menuTitle}>Settings</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Calendar')}
      />
    </DrawerContentScrollView>
  );
}

const AppDrawerScreen = () => (
  <Drawer.Navigator
    drawerStyle={{
      backgroundColor: '#3C38B1',
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Homes" component={AppStackNavigator} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AuthStack"
        options={{
          // title: 'Sign In',
          headerShown: false,
        }}
        component={AuthStackNavigator}
      />
      <RootStack.Screen name="AppStack" component={AppDrawerScreen} />
    </RootStack.Navigator>
  );
};

export default () => <RootStackScreen />;

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff',
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
  },
  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10,
  },
});
