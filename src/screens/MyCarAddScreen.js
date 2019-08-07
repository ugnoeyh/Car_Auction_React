import React, {Component} from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Styles } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class MyCarAddScreen extends React.Component{

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
            title: 'MyCar Add'
        };
    
      };

    render(){
        return(
            <View style={{marginTop:200}}> 
                <Text style={{textAlign: 'center'}}>등록하려는 차량의 정보를 정확히 입력하시오</Text>

                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <TextInput style={styles.textinput}/>
                    <TextInput style={styles.textinput}/>
                    <TextInput style={styles.textinput}/>
                    <TextInput style={styles.textinput}/>
                    <TextInput style={styles.textinput}/>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput:{
        borderWidth:1,
        margin:8,
        width: '70%'
    }
})

export default MyCarAddScreen