### freshchat-react-native-sdk

1. Update AppId, AppKey and Domain value in `freshchat_utils.js` file.

2. Update you test app's bundleId value and run the sample app.

3. To test theme customization, custom theme file `MyCustomFCTheme.plist` is added into project.

Note : If you are facing issues with sample like - ```Called object type 'facebook::flipper::SocketCertificateProvider' (aka 'int') is not a function or function pointer```    
Please add #include <functional> to ios/Pods/Flipper/xplat/Flipper/FlipperTransportTypes.h
may be an flipper needs an upgrade
