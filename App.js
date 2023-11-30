import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './Src/Screen/login';
import ProductList from './Src/Screen/ProductsList';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Src/Screen/Trangchu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva}  theme={eva.light}>
     <AppNavigator/>
      </ApplicationProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
