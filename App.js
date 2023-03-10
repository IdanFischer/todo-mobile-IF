import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './src/components/TaskList';

const Stack = createNativeStackNavigator()

export default function App() {
  const [tasks, setTasks] = useState()

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Home"
          component={TaskList}
          tasks={tasks}
          setTasks={setTasks} />
          {/* <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
