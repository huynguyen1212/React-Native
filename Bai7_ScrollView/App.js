import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HorizontalScrollView from './components/HorizontalScrollView';
import VerticalScrollView from "./components/VerticalScollView"
import ViewPagerExample from './components/ViewPagerExample';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <VerticalScrollView /> */}
      {/* <HorizontalScrollView /> */}
      <ViewPagerExample />
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
