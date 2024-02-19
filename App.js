import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MainStyle from "./src/mainStyle";
import TaskList from "./src/components/Task_List/taskList";
import SaveArea from "./src/components/Save_Area/saveButton";

export default function App() {
  return (
    <View style={MainStyle.container}>
      <View style={MainStyle.titleArea}>
        <Text style={MainStyle.title}>Yapılacaklar</Text>
        <Text style={MainStyle.number}>3</Text>
      </View>

      <TaskList />
      <SaveArea />
    </View>
  );
}
