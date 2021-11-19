/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Routes from './routes/Routes';


const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
