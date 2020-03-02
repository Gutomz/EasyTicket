import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Login from './pages/Login'
import Register from './pages/Register'
import EventScreen from './pages/Event'
import TicketScreen from './pages/Ticket'

import Dashboard from './pages/Dashboard'
import Wishes from './pages/Wishes'
import Tickets from './pages/Tickets'
import Profile from './pages/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="Register" component={Register}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="UserRoutes" component={UserRoutes} 
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Event" component={EventScreen} mode="modal"
          options={{
            title: 'Evento',
            headerStyle:{
              backgroundColor: "#363941",
            },
            headerTintColor: "#ffffff",
          }}
        />

        <Stack.Screen name="Ticket" component={TicketScreen} mode="modal"
          options={{
            title: 'Ingresso',
            headerStyle:{
              backgroundColor: "#363941",
            },
            headerTintColor: "#ffffff",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function UserRoutes( { navigation } ){
  return (
    <Tab.Navigator initialRouteName="Dashboard"

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard')     iconName = 'home';
          else if (route.name === 'Wishes')   iconName = 'heart';
          else if (route.name === 'Tickets')  iconName = 'ticket';
          else if (route.name === 'Profile')  iconName = 'user';
          
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        
      })}

      tabBarOptions={{
        activeTintColor: '#FFE16A',
        inactiveTintColor: 'white',

        activeBackgroundColor: '#E81A3E',
        inactiveBackgroundColor: '#E81A3E',
      }}
    
    >

      <Tab.Screen name="Dashboard" component={Dashboard} 
        options={{ title: 'Início' }}
      />

      <Tab.Screen name="Wishes" component={Wishes} 
        options={{ title: 'Desejos' }}
      />

      <Tab.Screen name="Tickets" component={Tickets} 
        options={{ title: 'Ingressos' }}
      />

      <Tab.Screen name="Profile" component={Profile} 
        options={{ title: 'Perfil' }}
      />

    </Tab.Navigator>
  );
}
