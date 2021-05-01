import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stacks'

import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import UserDeatailsScreen from '../screens/UserDetailsScreen';

import { AppDrawerNavigator } from './component/AppDrawerNavigator';
import { TabNavigator } from './component/AppTabNavigator';
import CustomSideBarMenu from './component/CustomSideBarMenu';

export const AppStackNavigator = createStackNavigator({
    AppDrawerNavigator : { 
        screen : AppDrawerNavigator,
        navigationOptions : {
            headerShown : false
        }
    },
    UserDeatailsScreen : { 
        screen : UserDeatailsScreen,
        navigationOptions : {
            headerShown : false
        }
    }
}, {
    initialRouteName : 'AppStackNavigator'
});