import {AppearanceProvider} from 'react-native-appearance';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {LightTheme, DarkTheme} from './Themes';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Write from '../screens/Write';
import Welcome from '../screens/welcome/index';

const Stack = createStackNavigator();

const Navigation = () => {
  const {darkTheme} = useSelector((state) => state.settings);
  const {colors} = useTheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={darkTheme === true ? DarkTheme : LightTheme}>
        <StatusBar
          barStyle={darkTheme === true ? 'light-content' : 'dark-content'}
          backgroundColor={colors.background}
        />
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Write" component={Write} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default Navigation;
