import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MainStyle from "./src/mainStyle";

export default function App() {
  const [textInfo, setTextInfo] = useState("");//We create the ustate for watch the ınputBox veriable, user write somthing in ınputbox we can easly following it steps
  const [arrayList, setArrayList] = useState([]);//user click the save button we add the element in arraylist, we use the state because arraylist may change every moment and may add new element

  const pushArray = () => {
    if (arrayList.includes(textInfo)) { //Here we check the array list and if we already have same element in array user will see alert box
      alert("Bu Not Zaten Eklenmiştir!");//Here we send the alert box for customer
      setTextInfo("");//we did clear the InputBox after the alert
      return;//We use the return in here becuse if we dont use the return program will stop
    }
    else if (textInfo.trim() !== "") {//we check the InputBox for empty and we said if Input Box doesnt empty thats means user try the add new elemnt in array list we can move on to the next step
      //Trim means; clear the head and end of the text if user click space accidentally we prevent this problem
      setArrayList((prevArray) => [...prevArray, textInfo]);//user send some string with ınputText we add this string to array
      setTextInfo("");//we did clear the TextInput
    }
  };

  const renderItem = ({ item }) => (
    <Text style={MainStyle.taskBox}>{item}</Text>//Task Box desing for flatlist
  );

  return (
    // Title Area Start
    <View style={MainStyle.container}>
      <View style={MainStyle.titleArea}>
        <Text style={MainStyle.title}>Yapılacaklar</Text>
        <Text style={MainStyle.number}>{arrayList.length}</Text>{/* Total task area */}
      </View>
      {/* Title Area End */}
      {/* Task Area */}
      <View style={MainStyle.taskListContainer}>
        <FlatList
          data={arrayList}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}//Key
        />
      </View>
      {/* Task Area End */}
      {/* Input Area Start */}
      <View style={MainStyle.inputArea}>
        <TextInput
          value={textInfo}
          placeholder="Yazi Giriniz"
          style={MainStyle.textInput}
          onChangeText={(text) => setTextInfo(text)}
        />
        <TouchableOpacity style={MainStyle.saveButton} onPress={pushArray}>
          <Text style={MainStyle.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
      {/* Input Area End */}
    </View>
  );
}
