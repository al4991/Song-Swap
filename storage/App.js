import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// Import initialized store singleton
import store from './store'

// Import components
import MyButtonComponent from './MyButtonComponent'
import MyLabelComponent from './MyLabelComponent'
import MyOtherButtonComponent from './MyOtherButtonComponent'

export default function App() {
  return (
    <store.Provider>
      <View style={styles.container}>
        <MyLabelComponent />
        <MyButtonComponent />
        <MyOtherButtonComponent />
      </View>
    </store.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
