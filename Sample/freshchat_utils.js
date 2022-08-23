import {
    Freshchat,
    FreshchatConfig,
    FaqOptions,
    ConversationOptions,
    FreshchatUser,
    FreshchatMessage,
    FreshchatNotificationConfig
} from 'react-native-freshchat-sdk';

appId = '{{your-app-id}}';
appKey = '{{your-app-key}}';
domain = '{{your-app-domain}}';

export const freshchatInit = () => {
    var freshchatConfig = new FreshchatConfig(appId, appKey);
    freshchatConfig.domain = domain;
    Freshchat.init(freshchatConfig);
}

export const showFreshchatConversations = () => {
     Freshchat.showConversations();
};