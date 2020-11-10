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
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { LightTheme, DarkTheme } from './src/utils/Themes';
import Navigation from './src/utils/Navigation';

const App = () => {
  const scheme = useColorScheme();
  const { colors } = useTheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <StatusBar 
          barStyle={scheme === 'dark' ? "light-content" : "dark-content"} 
          backgroundColor={colors.background}
          />
        <SafeAreaView style={{flex:1}}>
          <Navigation />
        </SafeAreaView>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default App;
