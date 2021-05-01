import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import WelcomeScreen from './screens/welcomeScreen';

import { AppDrawerNavigator } from './component/AppDrawerNavigator';
import { TabNavigator } from './component/AppTabNavigator';
import CustomSideBarMenu from './component/CustomSideBarMenu';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const SwitchNavigator = createSwitchNavigator ({
  WelcomeScreen : { screen : WelcomeScreen },
  Drawer : { screen : AppDrawerNavigator },
  Stack : { screen : TabNavigator }
});

const AppContainer = createAppContainer (SwitchNavigator);

//AppStackNavigator code

/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomSideBarMenu from './CustomSideBarMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import AppTabNavigator from './component/AppTabNavigator';
import SettingScreen from '../screens/SettingScreen';
import WelcomeScreen from '../screens/welcomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
  ExchangeScreen : { screen : ExchangeScreen },
  HomeScreen : { screen : HomeScreen },
});*/