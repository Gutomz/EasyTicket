import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Container } from './styles';

import UserInfoCard from '../../components/UserInfoCard'

const Stack = createStackNavigator();

export default function Profile() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileInfos}
        options={{
          title: 'Perfil',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileInfos(){
  return (
    <Container >
      <UserInfoCard title="Nome Completo" info={'Nome do Usuário'} editable/>
      <UserInfoCard title="RG" info={'RG do Usuário'} editable/>
      <UserInfoCard title="Email" info={'Email do Usuário'}/>
    </Container>
  )
}
