import * as React from 'react';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Write from '../screens/Write';
import Welcome from '../screens/welcome/index';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode='none'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Write" component={Write} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default Navigation;