import React, { Component } from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Styles, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import MyButton from '../components/MyButton'


export default class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        const LogId = this.props.navigation.getParam('LogId')
        this.state ={
            userid: '',
            pwd: '',
            LogId: LogId
        }
        if (loginId !== null)
        return this.props.navigation.navigate('MyCarList',{
          loginId:loginId
        }
        )
    }
    submitSignup = async () => {
        const userid = this.state.userid;
        const pwd = this.state.pwd;

        let user = AsyncStorage.getItem(`user:$(userid)`);
        if (user !==null){
            alert("이미 가입된 아이디입니다.")
            return false
        }

        AsyncStorage.setItem(`user:${userid}`, pwd);

        return this.props.navigation.navigate('MyCarList',{
            loginId:loginId
        })

        return true;
    } 
    
    render(){
        return(
            <View>
            <Text style={{textAlign: 'center', fontSize:24, }}>CAR AUCTION</Text>

            <TextInput style={styles.textinput} placeholder="이름" onChangeText={(text) => this.setState({ userid: text })}  />
            <TextInput style={styles.textinput} placeholder="비밀번호" onChangeText={(text) => this.setState({ pwd: text })} />
            <MyButton text="로그인"iconName="ios-arrow-round-forward" onPress={this.submitSignup}> </MyButton>

            <MyButton text="회원가입"iconName="ios-walk" onPress> </MyButton>
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
