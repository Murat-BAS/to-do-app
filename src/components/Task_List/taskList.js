import React from "react";
import { View, Text } from "react-native";
import MainStyle from "../../mainStyle";

const TaskList = () => {
  return (
    <View style={MainStyle.taskListContainer}>
      <Text style={MainStyle.taskBox}>Task 1</Text>
    </View>
  );
};

export default TaskList;