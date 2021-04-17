import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlatListItem(props) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
    }}>
      <Text style={styles.flatListItem}>{props.item.name}</Text>
      <Text style={styles.flatListItem}>{props.item.foodDescription}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16
  }
});
