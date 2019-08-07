import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MyButton from './MyButton'

export default class AuctionList extends React.Component {
    constructor(props) {
        super(props)
    }

    static defaultProps = {
       auctionList: null
    }

    render() {
        if (this.props.auctionList) {
            return (
                <View>
                    <Text> asd </Text>
                </View>
            )
        }
        else{
            return(
                <View style={{flexDirection:'column', alignItems:'center'}}>
                    <Text style={{textAlign:'center', fontWeight:'800', fontSize:22}}> 진행중인 경매가 없습니다  </Text>
                    <View>
                        <MyButton iconName="ios-calendar" text="경매 등록" />
                    </View>
                </View>
            )
            
        }

    }
}