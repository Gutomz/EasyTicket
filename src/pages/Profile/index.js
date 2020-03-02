import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { CommonActions } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

import { Container } from './styles';

import UserInfoCard from '../../components/UserInfoCard'

const Stack = createStackNavigator();

export default function Profile({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileInfos}
        options={{
          title: 'Perfil',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}} 
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ fontSize: 16, color: "#fff"}}>Sair</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileInfos({ navigation }){

  const [name, setName] = useState('Nome do Usuário');
  const [rg, setRG] = useState('Rg do Usuário');
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    //save userData on Backend
    if(edited){
      alert("Informações Salvas")
      setEdited(false);
    }
      
  }, [name, rg])

  function cardClick(info, setInfo){
    navigation.navigate('UserInfo', { info, setInfo, setEdited });
  }

  return (
    <Container >
      <UserInfoCard title="Nome Completo" info={name} onPress={() => cardClick(name, setName)} editable/>
      <UserInfoCard title="RG" info={rg} onPress={() => cardClick(rg, setRG)} editable/>
      <UserInfoCard title="Email" info={'Email do Usuário'}/>
    </Container>
  )
}
