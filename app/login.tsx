import React, {useState} from 'react'

import { useRouter } from 'expo-router'
import {View, Text, TextInput, Button, Alert} from 'react-native'

export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email== 'hola@test.com' && password == '123456'){


        }else{


        }
    }

  return (
    <div>
        <Text>Ingresar</Text>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
      <Button title='INGRESAR' onPress={handleLogin}></Button>
    </div>
  )
}

