import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Flex_JustifiContent() {
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 20, backgroundColor: "red" }} />
            <View style={{ flex: 20, backgroundColor: "green" }} />
            <View style={{ flex: 20, backgroundColor: "blue" }} />
        </View>
    );
}