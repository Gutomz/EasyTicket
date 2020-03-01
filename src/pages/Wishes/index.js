import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import EventsList from '../../components/EventsList';

const Stack = createStackNavigator();

export default function Wishes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wishes" component={EventsList}
        initialParams={{ likedOnly: true }}
        options={{
          title: 'Lista de Desejos',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Navigator>
  );
}