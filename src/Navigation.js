import {AppearanceProvider} from 'react-native-appearance';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {LightTheme, DarkTheme} from './utils/Themes';
import Home from './screens/Home';
import Write from './screens/Write';
import Settings from './screens/Settings';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();

const Navigation = () => {
  const {darkTheme} = useSelector((state) => state.settings);
  const [firstTimeUser, setFirstTimeUser] = React.useState(true);

  if (firstTimeUser === true) {
    return <Welcome />;
  }

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
        <Stack.Navigator
          initialRouteName={firstTimeUser === true ? 'Wecome' : 'Home'}
          headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Write" component={Write} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default Navigation;