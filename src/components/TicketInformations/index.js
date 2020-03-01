import React from 'react';

import { Container, Code, QRCode, Infos, UserNameInfo, UserDocumentInfo, TicketInfos, TicketBuyDate } from './styles';
export default function TicketInformations({ translateY, buyDate, buyTime, userName, userDocument }) {

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
          size={120}
          backgroundColor="#FFF"
          color="#000"
        />
      </Code>

      <Infos>
        <UserNameInfo >{userName}</UserNameInfo>
        <UserDocumentInfo>({userDocument})</UserDocumentInfo>
        <TicketInfos>
          <TicketBuyDate>Comprado em {buyDate}</TicketBuyDate>
          <TicketBuyDate> às {buyTime}</TicketBuyDate>
        </TicketInfos>
      </Infos>

    </Container>
  );
}
