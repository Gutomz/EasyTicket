import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Content, Card, Image, CardContent, Title, Subtitle, InfoContainer, H2, H3, ShowMore, ShowMoreText, CardFooter } from './styles';
import TicketInformations from '../../components/TicketInformations'
export default function Ticket() {

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
        <TicketInformations translateY={translateY}/>
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
            <Image />
            <CardContent >
              <Title>Titulo</Title>
              <Subtitle>Subtitulo</Subtitle>
              <InfoContainer>
                <H2>Localização</H2>
                <H3 >Destalhes da localização</H3>
              </InfoContainer>
              <ShowMore>
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
