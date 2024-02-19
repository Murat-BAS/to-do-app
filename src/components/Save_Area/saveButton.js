import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import MainStyle from "../../mainStyle";

const SaveArea = () => {

    const [info, setInfo] = useState();

    const tasksArray = [
        {text: "deneme", isActive: true}
    ];

    const takeText = () =>{
        tasksArray.push({text: info, isActive: ture})
    }

  return (
    <View style={MainStyle.inputArea}>
      <TextInput placeholder="Yazı Giriniz" style={MainStyle.textInput} onChange={text => (setInfo(text))}/>
      <TouchableOpacity style={MainStyle.saveButton} onPress={takeText}>
        <Text style={MainStyle.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveArea