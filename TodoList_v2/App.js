import React from 'react';
import TodoList from './components/TodoList';
import ItemPage from './components/ItemPage'; 
import History from './components/History';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    List: TodoList,
    Item: ItemPage,
    History: History
  },
  {
    initialRouteName: 'List',
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
      // <TodoList />
      <AppContainer />
  );
}
