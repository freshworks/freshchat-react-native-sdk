import messaging from '@react-native-firebase/messaging';

import {
	saveDeviceTokenInFreshchat,
	isFreshchatNotification,
	handleFreshchatPushNotifications
} from './freshchat_utils'

export const saveFirebaseDeviceTokenInFreshchat = async () =>{
	console.log("Saving Device token");
	await messaging().registerDeviceForRemoteMessages();
	const token = await messaging().getToken();
	saveDeviceTokenInFreshchat(token);
};

export const listenToForegroundNotifications = async () =>{
	console.log("Listening To Foreground Notifications");
	messaging().onMessage(async remoteMessage => {
     	console.log("Received Foreground Notifications Super - ", remoteMessage);

     	isFreshchatNotification(remoteMessage.data, (valid) => {
    		if (valid) {
    			console.log("Freshchat Notification - Yes");
       			handleFreshchatPushNotifications(remoteMessage.data);
    		} else {
    			console.log("Freshchat Notification - No");
        		// App Notifications. Should be handled app.
    		}
		});
    });
};

export const listenToBackgroundNotifications = async () =>{
	console.log("Listening To Background Notifications");
	messaging().setBackgroundMessageHandler(async remoteMessage => {
     	console.log("Received Background Notifications - ", remoteMessage);

     	isFreshchatNotification(remoteMessage.data, (valid) => {
    		if (valid) {
    			console.log("Freshchat Notification - Yes");
       			handleFreshchatPushNotifications(remoteMessage.data);
    		} else {
    			console.log("Freshchat Notification - No");
        		// App Notifications. Should be handled app.
    		}
		});
	});
};