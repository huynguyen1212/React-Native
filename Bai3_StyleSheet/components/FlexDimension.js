import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexDimension() {
  return (
    <View style={{ height: 500 }}>
      <View style={{ flex: 20, backgroundColor: "red" }} />
      <View style={{ flex: 80, backgroundColor: "green" }} />
      <View style={{ flex: 100, backgroundColor: "blue" }} />
    </View>
  );
}