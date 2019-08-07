import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import IconText from '../components/IconText'

export default class MyCarDetailScreen extends Component {
    constructor(props) {
        super(props);
        const myCar = props.navigation.getParam('item')
        this.state = {
            myCar: myCar
        }
    }

    static navigationOptions = ({ navigation }) => {
        const item = navigation.getParam('item')
        return {
            title: item.model,
        };
    };


    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                <Text>detail!</Text>
                <View>
                    <Image source={{ uri: this.state.myCar.image }}
                        style={{ height: 100 }}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', margin: 20 }}>
                    <View style={{ flex: 1 }}>
                        <View>
                            <IconText
                                iconName="ios-barcode"
                                text={this.state.myCar.vin}
                                size={20}
                            />

                            <IconText
                                iconName="logo-model-s"
                                text={this.state.myCar.model}
                                size={20}
                            />

                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                            <IconText
                                iconName="ios-construct"
                                text={this.state.myCar.manufacturer}
                                size={20}
                            />
                           <IconText
                                iconName="ios-calendar"
                                text={this.state.myCar.year}
                                size={20}
                            />
                    </View>
                </View>
            </View>
        )
    }

}