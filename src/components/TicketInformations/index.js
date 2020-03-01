import React from 'react';

import { Container, Code, QRCode, Infos, UserNameInfo, UserDocumentInfo, TicketInfos, TicketBuyDate } from './styles';

export default function TicketInformations({ translateY }) {

  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode 
          value="https://google.com"
          size={80}
          bgColor="#FFF"
          fgColor="#000"
        />
      </Code>

      <Infos>
        <UserNameInfo>Nome do Usuário</UserNameInfo>
        <UserDocumentInfo>(documento do usuário)</UserDocumentInfo>
        <TicketInfos>
          <TicketBuyDate>Comprado em 00/00/0000 às 00:00:00</TicketBuyDate>
        </TicketInfos>
      </Infos>

    </Container>
  );
}
