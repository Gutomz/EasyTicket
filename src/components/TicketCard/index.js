import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, Image, Content, Title, EventInfos, EventInfo, UserInfo } from './styles';

export default function TicketCard({ imageLink, title, userName, userDocument, date, time, onPress}) {
  return (
    <Container onPress={onPress}>
      <Image source={imageLink ? { uri: imageLink } : null}/>
      <Content >
        <Title>{title}</Title>
        <UserInfo><AntDesign name="user" size={12}/> {userName}</UserInfo>
        <UserInfo><AntDesign name="idcard" size={12}/> {userDocument}</UserInfo>
        <EventInfos>
          <EventInfo style={{textAlign: "left"}}><AntDesign name="calendar" size={12}/> {date}</EventInfo>
          <EventInfo style={{textAlign: "right"}}><AntDesign name="clockcircleo" size={12}/>{" " + time}</EventInfo>
        </EventInfos>
      </Content>
    </Container>
  );
}
