import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView 
} from 'react-native';
// import { Button } from 'react-native-material-design';
import { connect } from 'react-redux'; // 引入connect函数
import *as loginAction from '../actions/loginAction';// 导入action方法
import { StackActions, NavigationActions } from 'react-navigation';
import MainPage from './MainPage';
const resetAction = StackActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home' })
  ]
})

class LoginPage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 登录完成,切成功登录
    if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      console.log('login')
      return false;
    }
    return true;
  }

  render() {
    const { login } = this.props;
    return (
      <SafeAreaView style={[styles.SafeAreaView, { backgroundColor: '#ecf0f1' }]}>
      <StatusBar barStyle="light-content"
        backgroundColor="#6a51ae"/>
        <View style={styles.container}>
          <Text>状态: {this.props.status}</Text>
          <TouchableOpacity onPress={() => login()} style={{ marginTop: 50 }}>
            <View style={styles.loginBtn}>
              <Text>登录
            </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  }
});

export default connect(
  (state) => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user,
  }),
  (dispatch) => ({
    login: () => dispatch(loginAction.login()),
  })
)(LoginPage)
