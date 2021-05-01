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
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            allRequests : []
        }
    }

    renderItem = ( {item, i} ) => {
        console.log(item.item_name);
        return(
            <ListItem
                key = {i}
                title = {item.item_name}
                subtitle = {item.description}
                titleStyle = {{ color : 'black', fontWeight : 'bold' }}
                rightElement = {
                    <TouchableOpacity style = { styles.button }>
                        <Text style = {{ color : '#ffff' }}>Exchange</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        );
    }

    getAllRequests = () => {
        db.collection('exchange_requests').onSnapshot((snapshot) => {
            var requestedItems = snapshot.docs.map(document=>document.data())
            this.setState({
                allRequests : requestedItems
            })
        })
    }

    componentDidMount() {
        this.getAllRequests();
    }
    
    render() {
        return(
            <View>
                <FlatList
                    keyExtractor = {this.keyExtractor}
                    data = {this.state.allRequests}
                    renderItem = {this.renderItem}
                />
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
    }
});