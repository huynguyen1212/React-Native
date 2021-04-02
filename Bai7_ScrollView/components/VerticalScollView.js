import React from 'react';
import {
  StyleSheet, Text, View, AppRegistry, ScrollView, Image,
  TextInput, Dimensions
} from 'react-native';

export default function VarticalScrollView() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      maximumZoomScale={3} // đc zoom
      minimumZoomScale={0.2}
      keyboardDismissMode="on-drag" // bàn phím tự mất khi scroll, mặc định là 5
      contentContainerStyle={{ paddingLeft: 20 }}
    >
      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>

      <Text style={{ fontSize: 20, padding: 15, color: "white", textAlign: 'center', backgroundColor: "green" }}>
        This is a text
      </Text>

      <TextInput style={{ padding: 10, margin: 10, borderWidth: 1 }} placeholder="Enter text ..."></TextInput>

      <View style={{ backgroundColor: "#a03b51", height: 50 }}>
        <Text style={{ fontSize: 20, padding: 15, color: "white", textAlign: 'center' }}>
          This is a text
      </Text>
      </View>

      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>
      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>
      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>
      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>
      <Image
        source={require("../image/finalnight.png")}
        style={{ width: windowWidth, height: windowHeight - 300, marginTop: 20 }}
      ></Image>
    </ScrollView>
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
