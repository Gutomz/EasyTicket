import React from 'react';
import { View } from 'react-native';

import logo from '../../assets/logo.png'
import PrimaryButton from '../../components/PrimaryButton'
import SecundaryButton from '../../components/SecundaryButton'

import { Container, Logo, Form, DropDown } from './styles';
import { Input } from '../../globalStyles';

export default function Register({ navigation }) {
  return (
    <Container>
      <Logo source={logo} />

      <Form behavior="padding">

      <Input 
          placeholder="Nome Completo"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
        />

        <Input 
          placeholder="E-mail"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
        />

        <Input 
          placeholder="RG"
          placeholderTextColor="#888888"
          underlineColorAndroid="#2E323D"
        />

        <DropDown>
          <DropDown.Item label="Selecione uma Região" value="null" />
          <DropDown.Item label="Campinas" value="campinas" />
          <DropDown.Item label="São Paulo" value="saopaulo" />
          <DropDown.Item label="Sumaré" value="sumare" />
        </DropDown>
          


        <Input
          placeholder="Senha"
          placeholderTextColor="#888888"
          secureTextEntry={true}
        />

        <Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#888888"
          secureTextEntry={true}
        />

        <PrimaryButton title="Cadastrar"/>

      </Form>

      <SecundaryButton title="ENTRE COM UMA CONTA" onPress={() => navigation.navigate('Login')}/>

    </Container>
  );
}
