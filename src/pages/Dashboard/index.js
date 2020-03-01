import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { Container } from './styles';

import EventCard from '../../components/EventCard';
import LocalePicker from '../../components/LocalePicker'
import SearchBar from '../../components/SearchBar'

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
          headerRight: (() => { return <LocalePicker />}),
        }}
      />
    </Stack.Navigator>
  );
}

function EventsList({ locale, navigation }){

  const [eventsList, setEventsList] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(()=>{
    async function setList(){
      //get list from backend based on locale
      //get user liked events index from backend
      console.log(locale);
      setLikedEvents(LIKEDEVENTS);
      setEventsList(DATA);
    }

    setList();
  }, [locale]);


  function createRows(data, columns) {
    let newLenght = 0;
    data.forEach(element => {
      if(!element.empty) newLenght++;
    });

    const rows = Math.floor(newLenght / columns); // [A]
    let lastRowElements = data.length - rows * columns; // [B]
    while (lastRowElements !== columns) { // [C]
      data.push({ // [D]
        id: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; // [E]
    }
    console.log(data.length);
    return data; // [F]
  }

  function eventClicked(item){
    navigation.navigate('Event', { eventID: item.id })
  }


  return (
    <Container >
      <SearchBar />
      <FlatList
        data={createRows(eventsList, 2)}
        renderItem={({ item }) => {
            if(item.empty) return <EventCard style={{opacity:0}}/>
            return <EventCard 
              title={item.title}
              date={item.date}
              time={item.time}
              liked={likedEvents.find(event => event.id === item.id)}
              imageLink={item.imageLink}
              onPress={() => eventClicked(item)}
            />
          }
        }
        keyExtractor={item => item.id}
        numColumns={2}
        ListEmptyComponent={() => {return <Text>Lista Vazia</Text>}}
      />

    </Container>
  )
}



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Event 1',
    date: '27/04/20',
    time: '16:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Event 2',
    date: '15/04/20',
    time: '17:00',
    liked: true,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Event 3',
    date: '24/04/20',
    time: '14:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-bcz-145571e29d72',
    title: 'Event 4',
    date: '27/07/20',
    time: '19:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 5',
    date: '06/08/20',
    time: '08:00',
    liked: true,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-4as1f-bd96-145571e29d72',
    title: 'Event 6',
    date: '05/05/20',
    time: '17:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58dsf-3da1-471f-bcz-145571e29d72',
    title: 'Event 7',
    date: '10/04/20',
    time: '09:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694as0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 8',
    date: '22/05/20',
    time: '22:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58da0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 9',
    date: '03/10/20',
    time: '20:00',
    liked: false,
    locale: 'Campinas',
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
];

const LIKEDEVENTS = [
  {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'},
  {id: '58694a0f-3da1-471f-bcz-145571e29d72'}
];
