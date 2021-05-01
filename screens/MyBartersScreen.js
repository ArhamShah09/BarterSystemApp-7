import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ExchangeScreen from './ExchangeScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import WelcomeScreen from './welcomeScreen';

import { AppDrawerNavigator } from '../component/AppDrawerNavigator';
import { TabNavigator } from '../component/AppTabNavigator';
import CustomSideBarMenu from '../component/CustomSideBarMenu';

import firebase from 'firebase';
import db from '../config';

export default class MyBartersScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          userId: firebase.auth().currentUser.email,
          allBarters: [],
        };
        this.requestRef = null;
      }

    getAllBarters = () => {
        this.requestRef = db
        .collection('MyBarters')
        .where('donor_id', '==', this.state.userId)
        .onSnapshot((snapshot) => {
            var allBarters = snapshot.docs.map((document) => document.data());
            this.setState({
            allBarters: allBarters,
            });
        });
    };

    render() {
        return(
            <View style = {{ flex: 1 }}>

                {this.state.allBarters.length === 0 ? (
                    <View style = {styles.subtitle}>
                        <Text style = {{ fontSize: 20 }}>List of all Barters</Text>
                    </View>
                ) : (
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.allBarters}
                        renderItem = {this.renderItem}
                    />
                )}

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#ffff' }}>Exchange</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        },
        elevation : 16
    },
    subtitle :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});