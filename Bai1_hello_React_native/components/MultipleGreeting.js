import React from "react";
import { Text, View } from "react-native";

function Greeting(props) {
  let greetingString = `Hello ${props.name}. How are you??`
  return (
    <Text>
      {greetingString}
    </Text>
  )
}

export default function MultipleGreeting() {
  return (
    <View style={{ alignItems: "center" }}>
      <Greeting name="Huy Nguyen"></Greeting>
      <Greeting name="Alex"></Greeting>
    </View>
  )
}