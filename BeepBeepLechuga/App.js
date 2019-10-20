import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import reducer from './reducer'; 
import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import ReceivedScreen from './screens/ReceivedScreen';

const screens = { 
  Main: { screen: MainScreen },
  Received: { screen: ReceivedScreen },
  Collection: { screen: CollectionScreen }
}
const MainNavigator = createBottomTabNavigator(screens, { initialRouteName: 'Main' }); 
const AppContainer = createAppContainer(MainNavigator); 

const store = createStore(reducer, applyMiddleware(thunk)); 

export default function App() {
  return (
    <Provider store={store}> 
      <AppContainer />
    </Provider>
  );
}
