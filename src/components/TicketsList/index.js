import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Container, ToolContainer, EmptyMessage } from './styles';

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

  useEffect(() => {

    if(!dataReady) return;
    setFiltredList(titleFilter(ticketsList));

  }, [filter]);

  function titleFilter(_data){
    let data = [];
    for(let i = 0; i < _data.length; i++){
      if(_data[i].event.title.includes(filter))
        data.push(_data[i]);
    }
    return data;
  }

  function eventClicked(item){
    navigation.navigate('Ticket', { ticketID: item.id })
  }

  return (
    <Container >
      <ToolContainer>
        <SearchBar setTextFunction={setFilter}/>
      </ToolContainer>
      
      <FlatList
        data={filtredList}
        renderItem={({ item }) => {
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
        ListEmptyComponent={() => {return <EmptyMessage>Nenhum ingresso encontrado</EmptyMessage>}}
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
    userDocument: '37.556.008-7',
    buyDate: '23/04/2020',
    buyTime: '17:25:13',
  },
  {
    id: '02',
    event: {
      id: '58694as0f-3da1-471f-vs96-145571e29d72',
      title: 'Event 8',
      date: '22/05/20',
      time: '22:00',
      locale: 'Campinas',
      address: 'Casa de Eventos Campinas',
      description: '',
      price: 20,
      imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
    },
    userName: 'Augusto',
    userDocument: '37.556.008-7',
    buyDate: '01/03/2020',
    buyTime: '14:10:45',
  },
];

