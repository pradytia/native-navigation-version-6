import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log('component did mount');
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 2000);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 78}}>Splash Screen</Text>
      </View>
    );
  }
}

export default SplashScreen;
