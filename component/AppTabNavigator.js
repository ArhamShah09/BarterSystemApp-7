import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const TabNavigator = createBottomTabNavigator({
    ExchangeScreen : { screen : ExchangeScreen },
    HomeScreen : { screen : HomeScreen },
});