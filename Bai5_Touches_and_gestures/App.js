import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from "react-native-button"

export default function App() {
  const OnPress = () => {
    Alert.alert("you pressed the button!")
  }
  return (
    <View style={styles.container}>
      {/* <View style={{
        backgroundColor: "red",
        borderRadius: 10,
        shadowOpacity: 0.5
      }}>
        <Button onPress={() => {
          Alert.alert("you pressed the button!")
        }}
          title="This is the button!"
          color="green"
          borderRadius={3}
        >
        </Button>
      </View> */}
      <Button style={{
        fontSize: 28,
        color: "white",
        backgroundColor: "green",
        padding: 10,
        borderRadius: 5
      }}
        onPress={() => { OnPress() }}>

        This is a Button</Button>
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
