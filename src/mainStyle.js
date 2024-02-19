import { StyleSheet } from "react-native";

const MainStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "green",
        padding: 10
    },
    /* Title Area */
    titleArea:{
        flex: 1,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
        title: {
            flex: 6,
            fontSize: 40,
            fontWeight: "800",
            color: "orange",
            letterSpacing: 2
        },
        number: {
            flex: 1,
            fontSize: 30,
            fontWeight: "400",
            color: "orange"
        },
    /* Title Area End */
    /* Task Area Start */
    taskListContainer: {
        flex: 10,
        marginBottom: 10,
    },
        taskBox: {
            backgroundColor: "#000",
            color: "#fff",
            padding: 10,
            fontSize: 22,
            fontWeight: "300",
            borderRadius: 15,
            width: "100%",
            paddingLeft: 20,
            marginBottom: 10,
        },
    /* Task Area End */
    /* Input Area Start */
    inputArea: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
        textInput: {
            borderBottomWidth: 1,
            borderColor: "#fff",
            padding: 5,
            borderRadius: 40,
            marginBottom: 10,
            width: "100%",
            color: "#fff"
        },
        saveButton: {
            backgroundColor: "orange",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
        },
        saveButtonText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "600"
        }
    /* Input Area End */
})

export default MainStyle