/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  showFreshchatConversations,
  setUserProperties,
  setCustomUserProperties
} from './freshchat_utils'

const App: () => Node = () => {

  return (
    <SafeAreaView>
    <View style={{marginTop: 4 , padding: 10}} >
      <Button onPress={setUserProperties} title="Set Custom User Details" color="#841584" accessibilityLabel="Learn more about this purple button"/>
    </View>
    <View style={{marginTop: 4 , padding: 10}} >
      <Button onPress={setCustomUserProperties} title="Set Custom User Properties" color="#841584" accessibilityLabel="Learn more about this purple button"/>
    </View>
    <View style={{marginTop: 4 , padding: 10}} >
      <Button onPress={showFreshchatConversations} title="Show Conversations" color="#841584" accessibilityLabel="Learn more about this purple button"/>
    </View>
    </SafeAreaView>
  );
};

export default App;
