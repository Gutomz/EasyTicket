import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Container, ToolContainer } from './styles';

import TicketCard from '../TicketCard';
import SearchBar from '../SearchBar';

export default function TicketsList({ navigation }) {

  const [ticketsList, setTicketsList] = useState([]);
  const [filtredList, setFiltredList] = useState([]);
  const [filter, setFilter] = useState('');
  const [dataReady, setDataReady] = useState(false);

  useEffect(()=>{
    async function setList(){
      //get list from backend
      setTicketsList(DATA);
      setFiltredList(DATA);
      setDataReady(true);
    }

    setList();
  }, []);

  function eventClicked(item){
    navigation.navigate('Ticket', { eventID: item.event.id })
  }

  return (
    <Container >
      <ToolContainer>
        <SearchBar setTextFunction={setFilter}/>
      </ToolContainer>
      
      <FlatList
        data={filtredList}
        renderItem={({ item }) => {
            if(item.empty) return <TicketCard style={{opacity:0}}/>
            return <TicketCard 
              title={item.event.title}
              date={item.event.date}
              time={item.event.time}
              imageLink={item.event.imageLink}
              userName={item.userName}
              userDocument={item.userDocument}
              onPress={() => eventClicked(item)}
            />
          }
        }
        keyExtractor={item => item.id}
        ListEmptyComponent={() => {return <Text>Lista Vazia</Text>}}
      />

    </Container>
  );
}

DATA = [
  {
    id: '01',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '02',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '03',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '04',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '05',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '06',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
  {
    id: '07',
    event: {
      id: '58694a0f-3da1-471f-bcz-145571e29d72',
      title: 'Event 4',
      date: '27/07/20',
      time: '19:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7'
  },
];
