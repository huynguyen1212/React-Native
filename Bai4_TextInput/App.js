import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [typedText, settypedText] = useState("hello")
  const [passWord, setpassWord] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          margin: 20,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1
        }}
        keyboardType="email-address"
        placeholder="Enter your email"
        placeholderTextColor="green"
        onChangeText={(text) => {
          settypedText(text);
        }}
      />
      <Text>{typedText}</Text>

      <TextInput
        style={{
          height: 40,
          margin: 20,
          padding: 10,
          borderColor: "red",
          borderWidth: 1
        }}
        keyboardType="default"
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setpassWord(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
