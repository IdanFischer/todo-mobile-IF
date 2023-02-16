import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Button } from "react-native"

export default function TaskCard({ data }) {
  const { task } = data
  const { done } = data

  return (
    <View style={styles.taskCardContainer}>
      <Text style={done ? styles.textDone : styles.textTask}>Task: {task}</Text>

        {/* <Button 
        title="Delete"
        ></Button> */}
    </View>
  )
}

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: "purple",
    padding: 20,
    margin: 5
  },

  textTask: {
    color: "lime",
    textTransform: "capitalize",
    fontSize: 20
  },

  textDone: {
    color: "pink",
    textTransform: "capitalize",
    fontSize: 20,
    textDecorationLine: "line-through"
  },

  button: {

  }

})
