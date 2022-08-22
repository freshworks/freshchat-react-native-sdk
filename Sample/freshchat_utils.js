import {
    Freshchat,
    FreshchatConfig,
    FaqOptions,
    ConversationOptions,
    FreshchatUser,
    FreshchatMessage,
    FreshchatNotificationConfig
} from 'react-native-freshchat-sdk';

appId = 'c69641e9-8a85-4da1-858e-77169b0c76a7';
appKey = '23d7240c-0176-4de1-acc4-d63c534b59be';

export const freshchatInit = () => {
    var freshchatConfig = new FreshchatConfig(appId, appKey);
    Freshchat.init(freshchatConfig);
}

export const showFreshchatConversations = () => {
     Freshchat.showConversations();
};