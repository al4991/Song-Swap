import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8088F6',
    alignItems: 'stretch',
  },
  header: {
    height: "10%",
    backgroundColor: "#5A65FB",
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center",
  }, 
  content: {
    flex: 1,
    justifyContent: "flex-start", 

  },
  footer: { 
    justifyContent: "center",
    height: "10%",
    backgroundColor: "#5A65FB",
  },
  headerText: { 
    textAlign: "center",
    fontSize: 40, 
    color: "white",
  }, 
  bodyText: { 
    textAlign: "center",
    fontSize: 30, 
    color: "white",
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> To-do List</Text>
      </View>
      <View style={styles.content}>
        <TodoList />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
         </Text>
      </View>
    </View>
  );
}
