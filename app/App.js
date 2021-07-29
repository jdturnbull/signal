import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './screens/Root';

// TODO:
// Create a local db using './data/database' (see mobile app)
// Set up a store provider for redux

const AppContainer = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <SafeAreaProvider>
      <AppContainer>
        <StatusBar barStyle="dark-content" hidden={false} translucent={false} />
        <Root />
      </AppContainer>
    </SafeAreaProvider>
  );
};

export default App;
