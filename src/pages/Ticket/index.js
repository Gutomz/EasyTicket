import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Content, Card, Image, CardContent, Title, Subtitle, InfoContainer, H2, H3, ShowMore, ShowMoreText, CardFooter } from './styles';
import TicketInformations from '../../components/TicketInformations'
export default function Ticket() {
  return (
    <Container>

      <Content>
        <TicketInformations />
        <Card>
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
      </Content>

    </Container>
  );
}
