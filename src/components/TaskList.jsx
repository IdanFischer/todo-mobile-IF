import { ScrollView, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

export default function TaskList() {
  const [tasks, setTasks] = useState()


  // fetch tasklist in useEffect (run only once)
  useEffect(() => {
    fetch("https://todo-c9-api-if.web.app/tasks")
      // "http://127.0.0.1:5002/tasks"
      // "https://express-ts-c8.web.app/photos"
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
  }, [setTasks])
  // return ScrollView with tasklist mapped to TaskCard

  const toggleDone = (task) => {

    // is task done?
    const done = !!!task.done // true, false, undefined. We have 3 ! to make it abosulute true

    // we need to send a patch request to `/tasks/${task.taskId}`
    // in the body we need to send { done: ___ }
    fetch(`https://todo-c9-api-if.web.app/tasks/${task.taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ done })
    })
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
  }

  return (
    <ScrollView>
      <Text style={styles.h1}>To Do List</Text>

      <AddTask 
        setTasks={setTasks}
      />

      {/* <ImageBackground
      source={require = goku}
      resizeMode="cover"
      style={styles.bg}> */}
      {
        !tasks
          ? <Text>Loading...</Text>
          : tasks.map((task) => (
            <TouchableOpacity key={task.taskId} onPress={() => toggleDone(task)}>
              <TaskCard data={task}></TaskCard>
            </TouchableOpacity>
          ))
      }
      {/* </ImageBackground> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "700",
    display: "flex",
    textAlign: "center"
  }

  // bg: {
  //   flex: 1,
  //   justifyContent: "center",
  // }
})

