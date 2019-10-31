import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'native-base';
import defaultStyle from './src/style';

// Loading
import LoadingScreen from './src/screens/LoadingScreen';

// Logged In
import HomeScreen from './src/screens/HomeScreen';
import Subject from './src/screens/Subject'
// Logged Out
import LoginScreen from './src/screens/LoginScreen';


const focusedIconStyle = [defaultStyle.primaryColor, { fontSize: 30 }];


const Loading = createStackNavigator({ Loading: LoadingScreen });

export const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header:null ,
    }),
  },
  Subj: {
    screen: Subject,
    navigationOptions: () => ({
      header:null ,
    }),
  },
});

const Auth = createStackNavigator({
  Login: LoginScreen,
  //Register: RegisterScreen
});

export const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Loading,
      App,
      Auth
    },
    {
      initialRouteName: 'Loading'
    }
  );
};
