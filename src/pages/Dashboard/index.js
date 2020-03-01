import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import EventsList from '../../components/EventsList';
import LocalePicker from '../../components/LocalePicker'


const Stack = createStackNavigator();

export default function Dashboard({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsList}
        initialParams={{ likedsOnly: false }}
        options={{
          title: 'Eventos',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
          headerRight: () => (
            <LocalePicker />
          )
        }}
      />
    </Stack.Navigator>
  );
}




