import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Counter from '../components/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { StackActions, NavigationActions } from 'react-navigation';
import *as counterAction from '../actions/counterAction';

const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login' })
  ]
})

class MainPage extends Component {
  logout() {
    this.props.navigation.dispatch(resetAction)
    console.log('logout')
  }

  render() {
    const { user,state } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(user)}{JSON.stringify(state)}</Text>
        <TouchableOpacity onPress={this.logout.bind(this)} style={{ marginTop: 50 }}>
          <View>
            <Text>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FFFF'
  }
})

export default connect(
  (state) => ({
    count: state.counter,
  }),
  (dispatch) => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  })
)(MainPage)
