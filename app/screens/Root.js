import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Onboarding from './Onboarding';
import Main from './Main';

const AuthedStack = createStackNavigator();
const TopStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthedApp = () => {
  const onboardingComplete = true;

  return (
    <AuthedStack.Navigator screenOptions={{ headerShown: false }}>
      {onboardingComplete ? (
        <AuthedStack.Screen name="Main" component={Main} />
      ) : (
        <AuthedStack.Screen name="Onboarding" component={Onboarding} />
      )}
    </AuthedStack.Navigator>
  );
};

const RootApp = () => {
  const signedIn = true;

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {signedIn ? (
        <AppStack.Screen name="Authed" component={AuthedApp} />
      ) : (
        <AppStack.Screen name="Login" component={Login} />
      )}
    </AppStack.Navigator>
  );
};

const Root = () => {
  return (
    <TopStack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <TopStack.Screen name="App" component={RootApp} />
    </TopStack.Navigator>
  );
};

export default Root;
