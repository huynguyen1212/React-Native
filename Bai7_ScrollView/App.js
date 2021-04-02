import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalScrollView from './components/HorizontalScrollView';
import VerticalScrollView from "./components/VerticalScollView"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <VerticalScrollView /> */}
      <HorizontalScrollView />
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
