import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text, Icon} from '@ui-kitten/components';
import Addproduct from './Addproduct';
import ProductList from './ProductsList';
import Profile from './Profile';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login';

const { Navigator, Screen } = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const TopTabBar = ({ navigation, state }) => (
  <Layout>
     <TabBar
    
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='Profile' />
    <Tab title='Danh Sách'/>
    <Tab title='Thêm'  />
  </TabBar>
  </Layout>
 
);

const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Profile' component={Profile}/>
    <Screen name='Productlist' component={ProductList}/>
    <Screen name='Addproduct' component={Addproduct}/>
  </Navigator>
);

export default  AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={LoginScreen}/>
      <Stack.Screen name='Trangchu' component={TabNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>

);
