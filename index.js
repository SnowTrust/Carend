/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Typography } from './src/utils/Typography'

Typography();
AppRegistry.registerComponent(appName, () => App);
