import React from 'react';
import { Button, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home! </Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}