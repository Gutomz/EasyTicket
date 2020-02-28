import React from 'react';
import { FlatList, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { Container, List } from './styles';

import EventCard from '../../components/EventCard';

const Stack = createStackNavigator();

export default function Dashboard({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsList}
        options={{
          title: 'Eventos',
          headerStyle:{
            backgroundColor: "#363941",
          },
          headerTintColor: "#ffffff",
        }}
      />


    </Stack.Navigator>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bcz-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-vs96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-4as1f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58dsf-3da1-471f-bcz-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694as0f-3da1-471f-vs96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58da0f-3da1-471f-vs96-145571e29d72',
    title: 'Third Item',
  },
];

function EventsList(){

  function createRows(data, columns) {
    const rows = Math.floor(data.length / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { // [C]
      data.push({ // [D]
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; // [E]
    }
    return data; // [F]
  }

  return (
    <Container >

      <FlatList
        data={createRows(DATA, 2)}
        renderItem={({ item }) => {
            if(item.empty) return <EventCard style={{opacity:0}}/>
            return <EventCard />
          }
        }
        keyExtractor={item => item.id}
        numColumns={2}
        ListEmptyComponent={() => {return <Text>Lista Vazia</Text>}}
      />

    </Container>
  )
}
