import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Styles, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import MyButton from '../components/MyButton'


export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
        }
    }
    
    render(){
        return(
            <View>
            <Text style={{textAlign: 'center', fontSize:24, }}>CAR AUCTION</Text>
            <TextInput style={styles.textinput} placeholder="이름" onChangeText={(text) => this.setState({ name: text })} />
            <TextInput style={styles.textinput} placeholder="이메일" onChangeText={(text) => this.setState({ email: text })} />
            <MyButton text="로그인"iconName="ios-calendar"> </MyButton>

            <MyButton text="회원가입"iconName="ios-calendar"> </MyButton>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        margin:3,
        width: '100%',
        fontSize: 25,
    }
})
