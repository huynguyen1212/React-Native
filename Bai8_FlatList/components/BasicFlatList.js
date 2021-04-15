import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, AppRegistry } from 'react-native';
import flatListData from "../data/flatListData"

export default function FlatListItem(props) {
  return (
    <View style={{ flex: 1, backgroundColor: props.index % 2 == 0 ? 'mediumseagreen' : 'tomato' }}>
      <Text style={styles.flatListItem}>{props.item.name}</Text>
      <Text style={styles.flatListItem}>{props.item.foodDescription}</Text>
    </View>
  )
}

export default function BasicFlatList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={({ item, index }) => {
          // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
          <FlatListItem item={item} index={index}>

          </FlatListItem>
        }}
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 24,
  },
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16
  }
});
