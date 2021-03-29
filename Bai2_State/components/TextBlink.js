import React, { useState } from 'react';
import { Text, View } from 'react-native';

function Blink(props) {
  const [showText, setShowText] = useState(true);

  const taskTodo = () => {
    setShowText(!showText)
  }

  const timeToBlink = 2000;

  setInterval(taskTodo, timeToBlink);

  let textToDisplay = showText ? props.inputText : "";
  return (
    <Text>
      {textToDisplay}
    </Text>
  );
}

export default function TextBlink() {
  return (
    <View>
      <Blink inputText="Hello. How are you ??"></Blink>
      <Blink inputText="I am fine. Thank you"></Blink>
    </View>
  )
}