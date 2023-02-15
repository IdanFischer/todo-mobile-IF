import { useEffect, useState } from "react";
import { ScrollView, Text, ImageBackground, StyleSheet } from "react-native";
import TaskCard from "./TaskCard";
import goku from "../../assets/images/goku.webp"

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

  return (
    <ScrollView>
      <Text style={styles.h1}>To Do List</Text>
      {/* <ImageBackground
      source={require = goku}
      resizeMode="cover"
      style={styles.bg}> */}
      {
        !tasks
          ? <Text>Loading...</Text>
          : tasks.map((tasks) => (
              <TaskCard key={tasks.taskId} data={tasks}></TaskCard>
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

