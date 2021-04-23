import React from 'react'
import {
  StyleSheet, Text, View, FlatList, AppRegistry,
  Image, Alert, Platform, TouchableHighlight, Dimensions,
  TextInput
} from 'react-native'
import Button from "react-native-button"
import Modal from "react-native-modalbox"
import flatListData from "../data/flatListData"

export default function AddModal(props) {
  const [nameFood, setnameFood] = useState("")
  const [desciptionFood, setdesciptionFood] = useState("")
  var screen = Dimensions.get("window");

  showAddModal = () => {
    props.ref.myModal.open();
  }

  generateKey = () => {
    return require("random-string")({ length: numberOfCharacters });
  }

  return (
    <Modal ref={"myModal"} style={{
      justifyContent: 'center',
      borderRadius: Platform.OS === "ios" ? 30 : 0,
      shadowRadius: 10,
      width: screen.width - 80,
      height: 280
    }}
      position="center"
      backdrop={true}
      onClosed={() => {
        alert("Modal closed")
      }}
    >
      <Text>New food's information</Text>

      <TextInput
        style={{
          height: 40,
          borderBottomColor: 'gray',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          marginBottom: 10,
          borderBottomWidth: 1
        }}
        placeholder="Enter new food's name"
        value={nameFood}
        onChangeText={(text) => {
          setnameFood(text)
        }}
      >
      </TextInput>


      <TextInput
        style={{
          height: 40,
          borderBottomColor: 'gray',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 20,
          marginBottom: 10,
          borderBottomWidth: 1
        }}
        placeholder="Enter new food's description"
        value={desciptionFood}
        onChangeText={(text) => {
          setdesciptionFood(text)
        }}
      >
      </TextInput>

      <Button
        style={{
          fontSize: 18,
          color: 'while'
        }}
        containerStyle={{
          padding: 8,
          marginLeft: 70,
          marginRight: 70,
          height: 40,
          borderRadius: 6,
          backgroundColor: mediumseagreen
        }}
        onPress={() => {
          if (nameFood.lenght() === 0 || desciptionFood.lenght() === 0) {
            alert("You must enter food's name and description")
            return;
          }
          else {
            const newFood = {
              key: generateKey(24),
              name: nameFood,
              imageUrl: "",
              foodDescription: desciptionFood
            }
          }
          flatListData.push(newFood);
          props.parentFlatList.refreshFlatList(generateKey(24))
          refs.myModal.close();
        }}
      >
        Save
      </Button>
    </Modal>
  )
}

const styles = StyleSheet.create({})
