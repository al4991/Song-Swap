import React from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'

import store from './store'
import getRandomNumberPromise from './promiseNumber'

class MyOtherButtonComponent extends React.Component {
    onPress() {
      this.props.store.dispatch('NAME_YEFF', {previous: this.props.store.state.number})
    }

    render() {
      return (
        <View>
          <Button title={"Set to yeff "} onPress={() => this.onPress()} />
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyOtherButtonComponent = store.connect(MyOtherButtonComponent)

export default MyOtherButtonComponent