import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    Modal, 
    ScrollView, 
    KeyboardAvoidingView 
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component {
    constructor() {
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            description : '',
            itemName : '',
        }
    }

    addItem = (itemName, description) => {
        var exchangeId = this.createUniqueId();
        db.collection("exchange_requests").add({
            userId : this.state.userId,
            item_name : this.state.itemName,
            description : this.state.description,
            exchangeId : exchangeId
        });
        this.setState({
            itemName : '',
            description : ''
        });
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text : 'OK', onPress : ()=> {
                    this.props.navigation.navigate('HomeScreen');
                }}
            ]
        );
    }

    createUniqueId() {
        return Math.random().toString(36).substring(5)
    }
    
    render() {
        return(
            <View style = {{ flex : 1 }}>

                <TextInput
                    style = {styles.formTextInput}
                    placeholder = 'Item Name'
                    onChangeText = {(text)=> {
                        this.setState({
                            itemName : text
                        });
                    }}
                    value = {this.state.itemName}
                />

                <TextInput
                    style = {styles.formTextInput}
                    placeholder = 'Description'
                    onChangeText = {(text)=> {
                        this.setState({
                            description : text
                        });
                    }}
                    value = {this.state.description}
                />

                <TouchableOpacity
                    style = {[ styles.button, { marginTop : 25 }]}
                    onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
                >
                    <Text style = {{ color : '#ffff', fontSize : 18, fontWeight : 'bold' }}>Add Item</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
    },
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
    }
});