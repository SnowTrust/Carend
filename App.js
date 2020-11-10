/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { LightTheme, DarkTheme } from './src/utils/Themes';
import Navigation from './src/utils/Navigation';

const App = () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default App;
