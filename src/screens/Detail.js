import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>Detail</Text>
        <Text>{this.props.route.params.namaUser}</Text>
        <Text>{this.props.route.params.umur}</Text>
        <Text>{this.props.route.params.spesifikasiKomputer.processor}</Text>
        <Text>{this.props.route.params.spesifikasiKomputer.gpu}</Text>
        {/* <Text>{this.props.route.params.keranjangBelanja[0].namaProduk}</Text>
        <Text>{this.props.route.params.keranjangBelanja[0].harga}</Text> */}

        <FlatList
          data={this.props.route.params.keranjangBelanja}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#212121',
                marginTop: 10,
                marginHorizontal: 20,
                padding: 20,
                borderRadius: 6,
              }}>
              <Text style={{color: '#FFFFFF'}}>{item.namaProduk}</Text>
              <Text style={{color: '#FFFFFF'}}>{item.harga}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Pergi ke Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Pop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Detail;
