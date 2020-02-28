import React from 'react';

import { Container, Image, Title, Infos, Info } from './styles';

export default function EventCard({ style }) {
  return (
    <Container style={style}>

      <Image />

      <Title >Nome do Evento</Title>

      <Infos>
        <Info style={{textAlign: "left"}}>26/02/2020</Info>
        <Info style={{textAlign: "right"}}>20:00</Info>
      </Infos>

    </Container>
  );
}
