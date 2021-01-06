import {AppearanceProvider} from 'react-native-appearance';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {LightTheme, DarkTheme} from './utils/Themes';
import Home from './screens/Home';
import Write from './screens/Write';
import Settings from './screens/Settings';
import Search from './screens/Search';
import ImportExport from './screens/ImportExport';

const Stack = createStackNavigator();

const Navigation = () => {
  const {darkTheme} = useSelector((state) => state.settings);
  const options = {...TransitionPresets.ModalSlideFromBottomIOS};
  return (
    <AppearanceProvider>
      <NavigationContainer theme={darkTheme === true ? DarkTheme : LightTheme}>
        <StatusBar
          animated={true}
          barStyle={darkTheme === true ? 'light-content' : 'dark-content'}
          backgroundColor={
            darkTheme === true
              ? DarkTheme.colors.background
              : LightTheme.colors.background
          }
        />
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen name="Write" component={Write} options={options} />
          <Stack.Screen
            name="Import-Export"
            component={ImportExport}
            options={{...TransitionPresets.ModalPresentationIOS}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{...TransitionPresets.ModalPresentationIOS}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{...TransitionPresets.ModalPresentationIOS}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default Navigation;
