import React from 'react';

import { Container, Code, QRCode } from './styles';

export default function TicketInformations() {
  return (
    <Container>
      <Code>
        <QRCode 
          value="https://google.com"
          size={80}
          bgColor="#FFF"
          fgColor="#000"
        />
      </Code>
    </Container>
  );
}
