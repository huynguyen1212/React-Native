import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from "./components/HelloWorld";
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreeting';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Huy</Text>
      <StatusBar style="auto" />
      <HelloWorld />
      <Robot />
      <MultipleGreeting />
    </View>
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
