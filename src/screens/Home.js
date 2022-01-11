import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.unsubsribe = this.props.navigation.addListener('focus', () => {
      console.log('Hello World');
      //ambil data ke server lagi, dll
    });
  }

  componentWillUnmount() {
    this.unsubsribe();
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Detail', {
              namaUser: 'Gus Nando',
              umur: 22,
              spesifikasiKomputer: {
                processor: 'Core i7',
                gpu: 'Rtx 3090',
              },
              keranjangBelanja: [
                {namaProduk: 'sabun', harga: 5000},
                {namaProduk: 'shampoo', harga: 12000},
              ],
            })
          }>
          <Text>Pergi ke Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
