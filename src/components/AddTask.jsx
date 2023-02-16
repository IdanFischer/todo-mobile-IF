import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function AddTask({setTasks}) {
  const [task, setTask] = useState("")
  
  const handleAddNewTask = () => {
    console.log(`handleTask ${task}`)

    const newTask = {
      "done": false,
      "task": task
    }

    // useEffect(() => {
      fetch(`https://todo-c9-api-if.web.app/tasks/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      })
        .then(res => res.json())
        .then(setTasks)
        .catch(console.error)
    }
    // }, [setTask])

  return(
    <>
      <View>
        <Text>Add New Task</Text>
        <TextInput 
          style={styles.input}
          value={task}
          onChangeText={setTask}
        />
        <Button 
        title="Nerf this!"
          onPress={handleAddNewTask}
          />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
