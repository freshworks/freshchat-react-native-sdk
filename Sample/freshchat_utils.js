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
    freshchatConfig.themeName = "MyCustomFCTheme.plist";
    Freshchat.init(freshchatConfig);
}

export const showFreshchatConversations = () => {
     Freshchat.showConversations();
};

export const setUserProperties = (token) => {
    var freshchatUser = new FreshchatUser();
    freshchatUser.firstName = "John";
    freshchatUser.lastName = "Doe";
    freshchatUser.email = "johndoe@dead.man";
    freshchatUser.phoneCountryCode = "+91";
    freshchatUser.phone = "1234234123";

    console.log(freshchatUser);

    Freshchat.setUser(freshchatUser, (error) => {
        console.log(error);
    });
}

export const setCustomUserProperties = (token) => {
    var userPropertiesJson = {
        "test": "From Sample App"
    };
    
    Freshchat.setUserProperties(userPropertiesJson, (error) => {
        console.log(error);
    })
}

export const saveDeviceTokenInFreshchat = (token) => {
    Freshchat.setPushRegistrationToken(token);
}

export const isFreshchatNotification = (freshchatPushPayload, callback) => {
    return Freshchat.isFreshchatNotification(freshchatPushPayload, callback);
}

export const handleFreshchatPushNotifications = (freshchatPushPayload) => {
    Freshchat.handlePushNotification(freshchatPushPayload);
}
