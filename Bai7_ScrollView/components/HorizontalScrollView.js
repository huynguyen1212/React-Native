import React from 'react';
import {
  StyleSheet, Text, View, AppRegistry, ScrollView, Image,
  TextInput, Dimensions
} from 'react-native';

export default function HorizontalScrollView() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView
      horizontal={true} // true thì scroll ngang
      pagingEnabled={true} // cho phép lật như trang sách
      showsHorizontalScrollIndicator={true} // show một thanh nhỏ dưới màn hình
      scrollIndicatorInsets={{ top: 10, left: 10, right: 10, bottom: 10 }} // style cho ScollIndicator
      onMomentumScrollBegin={() => { // chạm xuống màn hình bắt đầu kéo là chạy lệnh
        // alert("Scroll begin")
      }}
      onMomentumScrollEnd={() => { // vuốt xong là chạy lệnh
        // alert("Scroll end")
      }}

      onScroll={(event) => {
        let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
        console.log(logData);
      }}
      scrollEventThrottle={10} // 10 mili giây update 1 lần thằng toạ độ trên
    >
      <View style={{
        backgroundColor: "#5f9ea0",
        flex: 1,
        marginTop: 20,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 20,
          padding: 15,
          color: "white",
          textAlign: "center"
        }}>
          Screen 1
        </Text>
      </View>

      <View style={{
        backgroundColor: "tomato",
        flex: 1,
        marginTop: 20,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 20,
          padding: 15,
          color: "white",
          textAlign: "center"
        }}>
          Screen 2
        </Text>
      </View>

      <View style={{
        backgroundColor: "green",
        flex: 1,
        marginTop: 20,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: "center"
      }}>
        <Text style={{
          fontSize: 20,
          padding: 15,
          color: "white",
          textAlign: "center"
        }}>
          Screen 3
        </Text>
      </View>
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
