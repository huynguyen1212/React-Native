import React from 'react';
import {
  StyleSheet, Text, View, AppRegistry, ScrollView, Image,
  TextInput, Dimensions, ViewPagerAndroidComponent
} from 'react-native';

export default function ViewPagerExample() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ViewPagerAndroidComponent style={{ flex=1 }} initialPage={0}
      onPageScroll={(event) => {
        console.log(`offset = ${event.nativeEvent.offset} `);
      }}
      onPageScrollStateChanged={(state) => {
        console.log(`Scrolling state = ${state}`);
      }}
      onPageSelected={(event) => {
        console.log(`Scrolled to page: ${event.nativeEvent.position} `);
      }}
    >
      <View style={{ backgroundColor: "lightseagreen" }}>
        <Text style={styles.textAlight}> Screen 1</Text>
      </View>
    </ViewPagerAndroidComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAlight: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    color: "white",
    textAlign: 'center'
  }
});
