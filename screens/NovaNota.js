import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class NovaNota extends Comment{
    render(){
        return(
            <View style={style.container}>
                <Text style={styles.title}>
                NovaNota
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
  });
  