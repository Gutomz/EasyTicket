import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native'

import { Container, ToolContainer, EmptyMessage } from './styles';

import EventCard from '../EventCard';
import SearchBar from '../SearchBar';

const EventsList = ({ navigation, route, locale }) => {

  const [eventsList, setEventsList] = useState([]);
  const [filtredList, setFiltredList] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);
  //const [locale, setLocale] = useState('Campinas');
  const [filter, setFilter] = useState('');
  const [dataReady, setDataReady] = useState(false);
  const { likedOnly } = route.params;
  
  useEffect(()=>{
    async function setList(){
      //get list from backend based on locale
      //get user liked events index from backend
      setLikedEvents(LIKEDEVENTS);
      console.log(locale);
      let data = [];
      if(likedOnly) data = likedFilter(DATA);
      else data = localeFilter(DATA);

      setEventsList(data);
      setFiltredList(data);
      setDataReady(true);
    }
    const unsubscribe = navigation.addListener('tabPress', e =>{

      setLikedEvents(LIKEDEVENTS);

    });

    setList();

    return unsubscribe;
  }, [navigation]);

  useEffect(()=>{

    if(!dataReady) return;
    let data = [];
    if(likedOnly) data = likedFilter(eventsList); 
    else {
      data = eventsList;
    }

    setFiltredList(titleFilter(data));

  }, [filter]);

  useEffect(() => {
    let data = localeFilter(DATA)
    setEventsList(data);
    setFiltredList(data);
  }, [locale])

  function createRows(data, columns) {
    let newLenght = 0;
    if(data.length == 0) return [];
    data.forEach(element => {
      if(!element.empty) newLenght++;
    });

    const rows = Math.floor(newLenght / columns); 
    let lastRowElements = data.length - rows * columns; 
    while (lastRowElements !== columns) { 
      data.push({
        id: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1; 
    }
    return data;
  }

  function eventClicked(item){
    navigation.navigate('Event', { eventID: item.id, buy: true })
  }

  function likedFilter(_data){
    let data = [];
    for(let i = 0; i < _data.length; i++){
      if(!_data[i].empty)
        if(LIKEDEVENTS.find(item => item.id === _data[i].id))
          data.push(_data[i]);
    }

    return data;
  }

  function localeFilter(_data){
    let data = [];
    for(let i = 0; i < _data.length; i++){
      if(!_data[i].empty)
        if(_data[i].locale === locale)
          data.push(_data[i]);
    }

    return data;
  }

  function titleFilter(_data){
    let data = [];
    for(let i = 0; i < _data.length; i++){
      if(!_data[i].empty)
        if(_data[i].title.includes(filter))
          data.push(_data[i]);
    }

    return data;
  }

  return (
    <Container >
      <ToolContainer>
        <SearchBar setTextFunction={setFilter}/>
      </ToolContainer>
      
      <FlatList
        data={createRows(filtredList, 2)}
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
        ListEmptyComponent={() => {return <EmptyMessage>Nenhum evento encontrado</EmptyMessage>}}
      />

    </Container>
  )
}

export default connect(state => ({ locale: state.locale }))(EventsList);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Event 1',
    date: '27/04/20',
    time: '16:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: 'Uma abobcaobocvaboobobaobvoabvobaoivbioabvoabov aobn voabnovbaobvoabnvoabnovoaibovhaovchaohcoahcoahsocihasiohcoiashcohasoichaosihcoiashocihasoihcoiashcoiahcoihasoichaoishcoiahochabhcaghcvuagbuvgauçagcvuagvuckagçukksgcuksagcuaguigcuga gusgc uasg uigu gpa cuiag cuiga uga uia gfuiag uif gaiug uiag uig aiug uiag udigauifg ausiguaig fua ug cauig aupiguiasgcfuigasiu cfdsg fuidsg fupgsad ufvpgas vuigsdapfuigds puif pasg fup gsadfuisd gfuip gfuip gasdufgasipfauipgfuiag gdiwgbd ugwuigauifdag iufuia gfaug fuag ufigauicgaui gfuagf lagfu agl fgaui gau gfuagfu ia glfga uiguaig fialgufigauilfuiagfualg fuag fugauilfgaulgauu g ilgfuiag fuag uailg uagauig algufagug lafga ugaulig aulig aulga fuaguiagliaufguafi gafliug aiuga afug afuigauiag aufgu g gaufgafulgaugluafgafu gaualg alua aul au aualaug aul',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Event 2',
    date: '15/04/20',
    time: '17:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Event 3',
    date: '24/04/20',
    time: '14:00',
    locale: 'Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
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
  {
    id: '58694a0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 5',
    date: '06/08/20',
    time: '08:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58694a0f-3da1-4as1f-bd96-145571e29d72',
    title: 'Event 6',
    date: '05/05/20',
    time: '17:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
    id: '58dsf-3da1-471f-bcz-145571e29d72',
    title: 'Event 7',
    date: '10/04/20',
    time: '09:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
  {
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
  {
    id: '58da0f-3da1-471f-vs96-145571e29d72',
    title: 'Event 9',
    date: '03/10/20',
    time: '20:00',
    locale: 'Campinas',
    address: 'Casa de Eventos Campinas',
    description: '',
    price: 20,
    imageLink:'https://www.queerevents.ca/sites/default/files/default_images/QES-Banner_Generic_EventListing.png',
  },
];

const LIKEDEVENTS = [
  {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'},
  {id: '58694a0f-3da1-471f-bcz-145571e29d72'}
];