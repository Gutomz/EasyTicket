import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, Image, Title, Infos, Info, ClickableEvent, ClickableIcon } from './styles';

export default function EventCard({ style, title, date, time, liked, imageLink }) {

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

      <ClickableEvent>
        <Image source={imageLink ? { uri: imageLink } : null}/>

        <Title >{title}</Title>

        <Infos>
          <Info style={{textAlign: "left"}}>{date}</Info>
          <Info style={{textAlign: "right"}}>{time}</Info>
        </Infos>

      </ClickableEvent>

      <ClickableIcon onPress={iconClick}>
        <AntDesign name={iconName} size={28} color="#ff40c9"/>
      </ClickableIcon>

    </Container>
  );
}
