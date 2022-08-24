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

import {showFreshchatConversations} from './freshchat_utils'

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <Button onPress={showFreshchatConversations} title="showConversations" color="#841584" accessibilityLabel="Learn more about this purple button"/>
    </SafeAreaView>
  );
};

export default App;
