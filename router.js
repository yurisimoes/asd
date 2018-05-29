// import React, {Component} from 'react';
// import { Dimensions, Plataform,} from 'react-native';
// import { createStackNavigator, createButtonTabNavigator, tabNavigator, StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';
import React from 'react'
import {View, Text, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'

import Notas from './screens/Notas'
import Materias from './screens/Materias'
import NovaNota from './screens/NovaNota'
import Perfil from './screens/Perfil'
import Sobre from './screens/Sobre'
import {Entypo} from '@expo/vector-icons'

export const Tabs = createBottomTabNavigator(
  {
    'Notas': {
      screen: Notas,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Entypo name='list' size={20} color={tintColor} />
      }
    },
    'Materias': {
      screen: Materias,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Entypo name='open-book' size={20} color={tintColor} />
      }
    },
    'Nova Nota': {
      screen: NovaNota,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Entypo name='new-message' size={20} color={tintColor} />
      }
    },
    'Perfil': {
      screen: Perfil,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Entypo name='user' size={20} color={tintColor} />
      }
    },
    'Sobre': {
      screen: Sobre,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Entypo name='info-with-circle' size={20} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
)

// let screen = Dimensions.get('window');

// export const Tabs = createButtonTabNavigator({
//     'Notas': {
//         screen: Notas,
//         navigationOpitions: {
//             tabBarLabel: 'Notas',
//             tabBarIcon:({ tintColor }) => <Icon name='list' type='entypo' syze={28} color={tintColor} /> 
//         },
//     },
//     'Materias': {
//     screen: Materias,
//     navigationOpitions: {
//     tabBarLabel: 'Materias',
//     tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
//             },
//         },      
//     'Perfil': {
//     screen: Perfil,
//     navigationOpitions: {
//     tabBarLabel: 'Perfil',
//     tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor}/> 
//                 },
//             }, 
//     'Sobre': {
//     screen: Sobre,
//     navigationOpitions: {
//     tabBarLabel: 'Sobre',
//     tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
//                     },
//                 },     
//     'NovaNota': {
//     screen: NovaNota,
//     navigationOpitions: {
//     tabBarLabel: 'NovaNotas',
//     tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
//     },
//     }       
// });
