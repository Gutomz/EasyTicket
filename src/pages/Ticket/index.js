import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Content, Card, Image, CardContent, Title, Subtitle, InfoContainer, H2, H3, ShowMore, ShowMoreText, CardFooter } from './styles';
import TicketInformations from '../../components/TicketInformations'


export default function Ticket({ navigation, route }) {

  const [imageLink, setImageLink] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [locale, setLocale] = useState('');
  const [address, setAddress] = useState('');
  const [eventID, setEventID] = useState('');
  const [userName, setUserName] = useState('');
  const [userDocument, setUserDocument] = useState('');
  const [buyDate, setBuyDate] = useState('');
  const [buyTime, setBuyTime] = useState('');

  const { ticketID } = route.params;

  let offset = 0.
  const translateY = new Animated.Value(0);
  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY,
        }
      }
    ],{ useNativeDriver: true},
  )

  useEffect(() => {
    async function loadData(){
      //get data from backend using ids
      let _ticket = DATA.find(item => item.id === ticketID);

      if(!_ticket) navigation.goBack();

      setBuyDate(_ticket.buyDate);
      setBuyTime(_ticket.buyTime);
      setImageLink(_ticket.event.imageLink);
      setTitle(_ticket.event.title);
      setDate(_ticket.event.date);
      setTime(_ticket.event.time);
      setLocale(_ticket.event.locale);
      setAddress(_ticket.event.address);
      setEventID(_ticket.event.id);
      setUserName(_ticket.userName);
      setUserDocument(_ticket.userDocument);
    }

    loadData();
  }, []);

  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if(translationY >= 100){
        opened = true;
      }else{
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
      
    }
  }

  return (
    <Container>

      <Content>
        <TicketInformations translateY={translateY}
          buyDate={buyDate}
          buyTime={buyTime}
          userName={userName}
          userDocument={userDocument}
        />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform:[{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}>
            <Image source={imageLink ? {uri: imageLink } : null}/>
            <CardContent >
              <Title>{title}</Title>
              <Subtitle>{date} às {time}</Subtitle>
              <InfoContainer>
                <H2>Localização</H2>
                <H3 >{locale} - {address}</H3>
              </InfoContainer>
              <ShowMore onPress={() => navigation.navigate('Event', { eventID: eventID, buy: false})}>
                <ShowMoreText>Mais Informações ...</ShowMoreText>
              </ShowMore>
            </CardContent>
            <CardFooter>
              <FontAwesome name="angle-double-down" size={16} color="black"/>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

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
    buyDate: '01/03/2020',
    buyTime: '14:10:45',
  },
];

