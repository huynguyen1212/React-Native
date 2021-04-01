import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, AppRegistry, Image, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const OnPress = () => {
    alert("You press the button!")
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight  // chuyển màu khi ấn nút
        onPress={OnPress}  // cái này phải có onPress
        underlayColor="red" // ấn vào thì đổi sang màu gì
        onShowUnderlay={() => {
          alert("onShowUnderlay button!")
        }}
      >
        <View style={{
          backgroundColor: "green"
        }}>
          <Text style={{
            color: "white",
            padding: 20,
            fontSize: 18,
          }}>
            TouchableHighlight
          </Text>
          {/* <Image style={{
            width: 100,
            height: 30,
          }}
            source={require("./image/finalnight.png")}>

          </Image> */}
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback // chỉ dùng cho Android
        onPress={OnPress}
        useForeground={false}
      >
        <View style={{
          width: 300,
          height: 50,
          margin: 20,
          backgroundColor: "blue"
        }}>
          <Text style={{
            margin: 10,
            fontSize: 20,
            color: "white",
            textAlign: 'center',
          }}>
            TouchableNativeFeedback
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity // có hiệu ứng trong suốt
        onPress={OnPress}
        activeOpacity={0.7} //gía trị độ trong
      >
        <View style={{
          width: 300,
          height: 50,
          margin: 20,
          backgroundColor: "red"
        }}>
          <Text style={{
            margin: 10,
            fontSize: 20,
            color: "white",
            textAlign: 'center',
          }}>
            TouchableOpacity
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback // bấm vào k có gì thay đổi
        onPress={OnPress}
        onLongPress={// ấn và giữ
          alert("onLongPress")
        }
        // onPressIn={ // hiện luôn trc ấn
        //   alert('onPressIn')
        // }
        // onPressOut={ // hiện sau ấn
        //   alert('onPressOut')
        // }
        // disabled={true} // vô hiệu hóa nút
      >
        <View style={{
          width: 300,
          height: 50,
          margin: 20,
          backgroundColor: "purple"
        }}>
          <Text style={{
            margin: 10,
            fontSize: 20,
            color: "white",
            textAlign: 'center',
          }}>
            TouchableWithoutFeedback
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
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
