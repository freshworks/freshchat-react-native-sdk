/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {freshchatInit} from './freshchat_utils'

AppRegistry.registerComponent(appName, () => App);

// We recommend initialising Freshchat SDK on App Launch
// You can also initialise it on the screen before loading SDK.
// Note: If Freshchat SDK is initialised 5-10 seconds before usage, user will not see loading screens
freshchatInit();
