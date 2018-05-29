import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class Materias extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Materias
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})