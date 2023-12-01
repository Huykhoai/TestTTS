import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Layout, Text } from '@ui-kitten/components';
import { API_TODO } from '../helper/db';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setShowAlert(true);
      return;
    }else{
      setShowAlert(false);
       const loginData = {
      name: email,
      password: password
    };

    console.log(loginData);
    fetch(API_TODO, {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => navigation.navigate('Trangchu'))
      .catch(err => console.log(err))
    }

   
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.title}>
        Đăng Nhập
      </Text>
      {showAlert && (
        <Text style={styles.alertText}>
          Vui lòng nhập email và mật khẩu
        </Text>
      )}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Input
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button onPress={handleLogin}>Đăng Nhập</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  alertText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
