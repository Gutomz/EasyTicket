import React from 'react';
import { Text } from 'react-native';

import logo from '../../assets/logo.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecundaryButton from '../../components/SecundaryButton'

import { Container, Logo, Form, Input } from './styles';

export default function Login({ navigation }) {
  return (
    <Container >
      <Logo source={logo} />

      <Form>

        <Input 
          placeholder="E-mail"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
        />

        <Input
          placeholder="Senha"
          placeholderTextColor="#888888"
          secureTextEntry={true}
        />

        <PrimaryButton title="Entrar" onPress={() => navigation.navigate('UserRoutes')}/>

      </Form>

      <SecundaryButton title="CADASTRE-SE GRÁTIS" onPress={() => navigation.navigate('Register')}/>

    </Container>
  );
}
