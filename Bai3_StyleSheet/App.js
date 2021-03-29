import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexDimension from './components/FlexDimension';
import Flex_JustifiContent from "./components/Flex_JustifiContent"

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
      <Text style={styles.text2}>Open up App.js ing on your app!</Text>
      <Text style={styles.text3}>Open up App.king on your app!</Text> */}
      {/* <FlexDimension /> */}

      <Flex_JustifiContent />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'green',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // text1: {
  //   margin: 5,
  //   color: "white",
  // },
  // text2: {
  //   margin: 5,
  //   color: "yellow",
  //   fontWeight: "bold",
  //   fontSize: 20
  // }
});
