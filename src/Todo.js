import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { useState } from "react";
import Task from "./Task";
import { Feather } from "@expo/vector-icons";


// Custom component

const Todo = ({ navigaton }) => {                // Main arrow function
  const [task, setTask] = useState();            // Hook to create task
  const [taskList, setTaskList] = useState([]);  // Hook with array to save tasks' in one list

  const addTask = () => {                        // Arrow function
    setTaskList([...taskList, task]);            // function to add new tasks to the list
    setTask("");                                 // Empties the textinput after adding the string to list
  };

  const taskFinish = (index) => {                // Arrow function that takes index as argument
    let taskCopy = [...taskList];                // Variable that has the list as value
    taskCopy.splice(index, 1);                   // Function to remove a task from list by slicing the index by 1
    setTaskList(taskCopy);                       // Setting the hook with the variable that renders new value
  };

  const image = {                                                      // Variable for background image
    uri: "https://cutewallpaper.org/22/mint-wallpapers/109031532.jpg",
  };

  return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.taskFrame}>
          <View style={styles.insideFrame}>
            {taskList.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => taskFinish(index)}>
                  {/** Button with onPress function that calls on a removing task method. */}
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/** Conditional rendering: IOS: when keyboard pops, the component moves up. Android: The view resize.
         * TextInput with placeholder to write in task.
         * onChangeText function to make a task.
         * Button with onPress function to add task to list.
         */}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeBox}
        >
          <TextInput
            style={styles.inputText}
            placeholder={"Write here..."}
            placeholderTextColor={"#59AAAA"}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.addBox}>
              <Feather name="arrow-up-circle" size={37} color="#59AAAA" />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
  );
};

// Styling

const styles = StyleSheet.create({
  image:{
    flex:1, 
  },
  taskFrame: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  insideFrame: {
    marginTop: 20,
  },
  writeBox: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  inputText: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#59AAAA",
    borderWidth: 1,
    width: 250,
    marginLeft: 40,
  },
  addBox: {
    width: 80,
    justifyContent: "center",
  },  
});

export default Todo;
