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
domain = '{{domain}}';

export const freshchatInit = () => {
    var freshchatConfig = new FreshchatConfig(appId, appKey);
    freshchatConfig.domain = domain;
    Freshchat.init(freshchatConfig);
}

export const showFreshchatConversations = () => {
     Freshchat.showConversations();
};

export const saveDeviceTokenInFreshchat = (token) => {
    Freshchat.setPushRegistrationToken(token);
}

export const isFreshchatNotification = (freshchatPushPayload, callback) => {
    return Freshchat.isFreshchatNotification(freshchatPushPayload, callback);
}

export const handleFreshchatPushNotifications = (freshchatPushPayload) => {
    Freshchat.handlePushNotification(freshchatPushPayload);
}
