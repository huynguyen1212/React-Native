import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import flatListData from "../data/flatListData"
import AddModal from './AddModal';
import FlatListItem from './FlatListItem';

export default function BasicFlatList() {
  const [deleteRowKey, setdeleteRowKey] = useState(null)
  refreshFlatList = () => {
    setdeleteRowKey(activeKey)
    refs.flatList.scrollToEnd();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        renderItem={({ item, index }) => {
          // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
          return (
            <FlatListItem item={item} index={index}></FlatListItem>
          )
        }}
      >
      </FlatList>

      <Text>hi</Text>

      <AddModal ref={"myModal"} parentFlatList={refreshFlatList}>

      </AddModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  }
});
