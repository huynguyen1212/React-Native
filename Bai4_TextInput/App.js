import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';

export default function App() {
  const [typedText, settypedText] = useState("hello")
  const [passWord, setpassWord] = useState("")
  const [typedDescription, settypedDescription] = useState("")

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      settypedText("Kerboard is Show")
    })
    Keyboard.addListener("keyboardDidHide", () => {
      settypedText("Kerboard is Hide")
    })

    return () => {
      Keyboard.removeListener("keyboardDidShow", () => {
        settypedText("Kerboard is Show")
      });
      Keyboard.removeListener("keyboardDidHide", () => {
        settypedText("Kerboard is Hide")
      });
    };
  }, [])

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
        autoFocus={true} // nhảy vào ô này khi vào trang
        keyboardType="default"
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setpassWord(text);
        }}
      />

      <TextInput
        style={{
          height: 100,
          margin: 20,
          padding: 10,
          borderColor: "gray",
          borderWidth: 1
        }}
        multiline={true} // gọi đc nhiều dòng
        borderBottomColor="green"
        borderBottomWidth={3}
        borderLeftColor="green"
        borderLeftWidth={3}
        editable={true} // true là sửa đc
        returnKeyType="google"
        onSubmitEditing={Keyboard.dismiss} // xong là tụt xuống
        onChangeText={(text) => {
          settypedDescription(text);
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
