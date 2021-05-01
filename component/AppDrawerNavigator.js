import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomSideBarMenu from './CustomSideBarMenu';
import { TabNavigator } from './AppTabNavigator';

import SettingScreen from '../screens/SettingScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import MyBartersScreen from '../screens/MyBartersScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : TabNavigator
    },
    CustomSideBar : {
        screen : CustomSideBarMenu
    },
    Settings : {
        screen : SettingScreen
    },
    MyBarters: {
        screen: MyBartersScreen,
    }
},
    {
        contentComponent : CustomSideBarMenu
    },
    {
        initialRouteName : 'Home'
    }
);
  
const AppContainer = createAppContainer(AppDrawerNavigator);