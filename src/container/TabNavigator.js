import React, { Component } from 'react';

// import { Ionicons } from '@expo/vector-icons'; //
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/SettingsScreen';
import DetailsScreen from '../pages/DetailsScreen';

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
}, {
  mode: 'modal',
  headerMode: 'none',
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //   } else if (routeName === 'Settings') {
      //     iconName = `ios-options${focused ? '' : '-outline'}`;
      //   }

      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return <Ionicons name={iconName} size={25} color={tintColor} />;
      // },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);