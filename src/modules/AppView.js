import React from 'react';

// import Navigator from './navigation/Navigator';
import RootAppNavigation from './navigation/RootNavigation';

export default function AppView() {
  return (
    <RootAppNavigation onNavigationStateChange={() => {}} uriPrefix="/app" />
  );
}

// export default function AppView() {
//   return <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
// }
