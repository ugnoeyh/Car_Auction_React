import React, {Component} from 'react';

import { View, Text, TouchableOpacity, Image, StyleSheet, Styles, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

class MyCarAddScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vin: '',
            manufacturer: '',
            model: '',
            year: '',
            image: '',
        }
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
            title: 'MyCar Add'
        };
    
      };

      submitButtton = async() => {
       myCar = await AsyncStorage.getItem('myCar');
       console.log(myCar);
      }

    render(){
        return(
            <View style={{marginTop:200}}> 
                <Text style={{textAlign: 'center'}}>등록하려는 차량의 정보를 정확히 입력하시오</Text>

                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <TextInput style={styles.textinput} placeholder="vin" onChangeText={(text)=>this.setState({vin:text})}/>
                    <TextInput style={styles.textinput} placeholder="제조사"onChangeText={(text)=>this.setState({manufacturer:text})}/>
                    <TextInput style={styles.textinput} placeholder="모델"onChangeText={(text)=>this.setState({model:text})}/>
                    <TextInput style={styles.textinput} placeholder="연식"onChangeText={(text)=>this.setState({year:text})}/>
                    <TextInput style={styles.textinput} placeholder="Image URL" onChangeText={(text)=>this.setState({image:text})}/>

                   <MyButton
                    iconName="ios-add"
                    text="차량 등록"
                    size={25}
                    onPress={this.submitButtton}
                   /> 

                </View>
            </View>
        )
    }
}

export default MyCarAddScreen

const styles = StyleSheet.create({
    textinput:{
        borderWidth:1,
        margin:8,
        width: '80%',
        fontSize: 23,
    }
})
