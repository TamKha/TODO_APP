import { View, StyleSheet, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

//Custom  component

const Task = (props) => {                            // Main arrow function with props in argument
  const [checked, setChecked] = useState(false);     // Hook with boolean to check a state


  // Task container
  // Checkbox with conditional rendering 

  return (
    <View style={styles.taskBox}>
      <View style={styles.insideBox}>
        <Checkbox
          color="#97D9D9"
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.taskText}>{props.text}</Text>
      </View>

      <MaterialIcons name="delete-forever" size={26} color="#97D9D9" />
    </View>
  );
};

//Styling

const styles = StyleSheet.create({
  taskBox: {
    backgroundColor: "#59AAAA",
    padding: 15,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: "#97D9D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },

  insideBox: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
  },

  taskText: {
    maxWidth: "80%",
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Task;
