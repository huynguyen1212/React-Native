import React from "react";
import { Image } from "react-native";

export default function Robot() {
  const imageSource = {
    uri: "https://bkaii.com.vn/images/phat_trien_robot.jpg"
  }
  return (
    <Image source={imageSource} style={{ width: 200, height: 300 }}></Image>
  );
}