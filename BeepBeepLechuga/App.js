import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import reducer from './reducer'; 
import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import ReceivedScreen from './screens/ReceivedScreen';

const screens = { 
  Swap: { 
    screen: MainScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='exchange' size={20} color={tintColor}/> 
      )
    }
  },
  'Last Song ': { 
    screen: ReceivedScreen ,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='undo' size={20} color={tintColor}/> 
      )
    }
  },
  'Received': { 
    screen: CollectionScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name='history' size={20} color={tintColor}/> 
      )
    }
  }
}
const MainNavigator = createBottomTabNavigator(screens, { initialRouteName: 'Swap' }); 
const AppContainer = createAppContainer(MainNavigator); 

const store = createStore(reducer, applyMiddleware(thunk)); 

export default function App() {
  return (
    <Provider store={store}> 
      <AppContainer />
    </Provider>
  );
}
