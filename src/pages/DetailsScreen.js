import React from 'react';
import { Button, Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}
