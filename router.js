import React, {Component} from 'react';
import { Dimensions, Plataform,} from 'react-native';
import { createStackNavigator, createBottonTabNavigator, tabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Notas from './screens/Notas'
import Materias from './screens/Materias'
import NovaNota from './screens/NovaNota'
import Perfil from './screens/Perfil'
import Sobre from './screens/Sobre'

let screen = Dimensions.get('window');

export const Tabs = createBottonTabNavigator({
    'Notas': {
        screen: Notas,
        navigationOptions: {
            tabBarLabel: 'Notas',
            tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
        },
    },
    'Materias': {
    screen: Materias,
    navigationOptions: {
    tabBarLabel: 'Materias',
    tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
            },
        },      
    'Perfil': {
    screen: Perfil,
    navigationOptions: {
    tabBarLabel: 'Perfil',
    tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor}/> 
                },
            }, 
    'Sobre': {
    screen: Sobre,
    navigationOptions: {
    tabBarLabel: 'Sobre',
    tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
                    },
                },     
    'NovaNota': {
    screen: NovaNota,
    navigationOptions: {
    tabBarLabel: 'NovaNotas',
    tabBarIcon:({ tintColor }) => <Icon name="list" type="entypo" syze={28} color={tintColor} /> 
    },
    }       
});