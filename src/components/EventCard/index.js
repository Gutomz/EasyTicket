import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, Image, Title, InfosBackground, Infos, Info, ClickableEvent, ClickableIcon } from './styles';

export default function EventCard({ style, title, date, time, liked, imageLink, onPress }) {

  const [iconName, setIconName] = useState('hearto');

  useEffect(()=>{
    setIconName(liked ? 'heart' : 'hearto');
  }, [liked]);

  function iconClick(){
    //comunication with backend to set liked or not

    setIconName(iconName === 'heart' ? 'hearto' : 'heart');
  }

  return (
    <Container style={style}>

      <ClickableEvent onPress={onPress}>
        <Image source={imageLink ? { uri: imageLink } : null}/>

        <InfosBackground>
          <Title >{title}</Title>

          <Infos>
            <Info style={{textAlign: "left"}}><AntDesign name="calendar" size={12}/> {date}</Info>
            <Info style={{textAlign: "right"}}><AntDesign name="clockcircleo" size={12}/>{" " + time}</Info>
          </Infos>
        </InfosBackground>

      </ClickableEvent>

      <ClickableIcon onPress={iconClick}>
        <AntDesign name={iconName} size={28} color="#ff40c9"/>
      </ClickableIcon>

    </Container>
  );
}
