import React, { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import AppView from './AppView';

const AppViewContainer = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // eslint-disable-next-line no-unused-expressions
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return <AppView />;
};

export default AppViewContainer;
