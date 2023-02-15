import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Button } from "react-native"

export default function TaskCard({ data }) {
  const { task } = data
  const { done } = data

  return (
    <View style={styles.taskCardContainer}>
      <Text style={styles.textTask}>Task: {task}</Text>
      <Text style={styles.textDone}>Done: {done}</Text>
      <TouchableOpacity>
        <Button 
        title="Delete"
        ></Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: "#FF69B4",
    padding: 20,
    margin: 5
  },
  textTask: {
    color: "wheat",
    textTransform: "capitalize",
    marginBottom: 20,
    fontSize: 20
  },

  textDone: {
    color: "lime",
    textTransform: "capitalize",
    fontSize: 20
  },

  button: {

  }

})
