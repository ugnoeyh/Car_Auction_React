import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import CarItem from './CarItem'

export default class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }

  static defaultProps = {
    carList: Object()
  }

  renderCarItem({ item, index, separators }) {
    return (
      <CarItem item={item} onPress={() => this.props.navigation.push('MyCarDetail', { item: item })}></CarItem>
    )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.carList}
          renderItem={this.renderCarItem.bind(this)}
          keyExtractor={(item, index) => item.vin}
          refreshing={this.state.refreshing}

          onRefresh={() => {
            this.setState({ refreshing: true })
            this.setState({ refreshing: false })
          }
          }

          ItemSeparatorComponent={({ highlighted, leadingItem }) => {
            return (
              <View
                style={{
                  height: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  width: '100%',
                  backgroundColor: 'gray',
                }}
              >
              </View>
            )
          }}
        />
      </View>
    )
  }
}