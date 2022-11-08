import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Freshchat,
  FreshchatConfig,
  FaqOptions,
  ConversationOptions,
  FreshchatUser,
  FreshchatMessage,
  FreshchatNotificationConfig
} from 'react-native-freshchat-sdk';

const showConversations = () => {
  Freshchat.showConversations();
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.heading}>
        Freshchar Expo Example App
      </Text>
      <Button onPress={showConversations} title="Show Conversations" color="#841584"/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


