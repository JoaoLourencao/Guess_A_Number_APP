import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import InputArea from './screens/InputArea';

export default function App() {
  return (
    <View style={styles.screen}>
        <Header title="Adivinhe o número"/>
        <InputArea/>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1
    }
});
