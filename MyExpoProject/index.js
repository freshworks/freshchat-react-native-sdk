import { registerRootComponent } from 'expo';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {
    Freshchat,
    FreshchatConfig,
    FaqOptions,
    ConversationOptions,
    FreshchatUser,
    FreshchatMessage,
    FreshchatNotificationConfig
} from 'react-native-freshchat-sdk';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
AppRegistry.registerComponent(appName, () => App);

var freshchatConfig = new FreshchatConfig('APPID', 'APPKEY');
freshchatConfig.teamMemberInfoVisible = true;
freshchatConfig.domain = "DOMAIN";
Freshchat.init(freshchatConfig);


