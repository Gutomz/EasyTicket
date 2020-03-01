import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import TicketsList from '../../components/TicketsList'
import EventsList from '../../components/EventsList'


const Stack = createStackNavigator();

export default function Tickets() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tickets" component={TicketsList}
        initialParams={{}}
        options={{
          title: 'Ingressos',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Navigator>
  );
}
