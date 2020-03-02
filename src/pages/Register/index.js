import React, { useState } from 'react';

import logo from '../../assets/logo.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecundaryButton from '../../components/SecundaryButton'

import { CommonActions } from '@react-navigation/native';

import { Container, Logo, Form, DropDown } from './styles';
import { Input } from '../../globalStyles';

export default function Register({ navigation }) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRG] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchPasswords, setMatchPasswords] = useState(false);

  async function handleSubmit(){
    if(validateInputs()){
      //Send informations to backend

      //log in as user
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'UserRoutes', 
              params: { user: 'email' },
            },
          ],
        }),
      );
    }
  }

  function validateInputs(){
    if(userName === '') return false;
    if(email === '') return false;
    if(rg === '') return false;
    if(password === '') return false;
    if(confirmPassword === '') return false;

    return matchPasswords;
  }

  function passwordsMatch(text){

    setMatchPasswords(text === password);
    setConfirmPassword(text);
  }

  return (
    <Container>
      <Logo source={logo} />

      <Form behavior="padding">

      <Input 
          placeholder="Nome Completo"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
          autoCapitalize="words"
          autoCorrect={false}
          value={userName}
          onChangeText={setUserName}
        />

        <Input 
          placeholder="E-mail"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Input 
          placeholder="RG"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          value={rg}
          onChangeText={setRG}
        />
          
        <Input
          placeholder="Senha"
          placeholderTextColor="#888888"
          secureTextEntry={true}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#888888"
          secureTextEntry={true}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={passwordsMatch}
        />

        <PrimaryButton title="Cadastrar" onPress={handleSubmit}/>

      </Form>

      <SecundaryButton title="ENTRE COM UMA CONTA" onPress={() => navigation.navigate('Login')}/>

    </Container>
  );
}
