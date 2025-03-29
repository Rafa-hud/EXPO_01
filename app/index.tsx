import React, {useState} from 'react'

import { router, useRouter } from 'expo-router'
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native'
import { loginUser } from '../app/services/authService';

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
      console.log("llega a handleLogin");
      const result = await loginUser(email, password);
        if(result.success){
          router.replace('/home');


        }else{
          console.log('Usuario o contraseña incorrectos');
          Alert.alert('Usuario o contraseña incorrectos');
          console.log('Usuario o contraseña incorrectos');
          window.alert('Usuario o contraseña incorrectos');



        }
    }

  return (
    <View>
        <Text>Ingresar</Text>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        style={styles.input}
        

      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        
        />
      <Button title='INGRESAR' onPress={handleLogin} ></Button>
      </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
}
);

