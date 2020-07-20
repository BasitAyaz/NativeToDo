import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Note from './component/note'

export default function App() {
  return (
    <View style={styles.container}>
      <Note />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8ea",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
