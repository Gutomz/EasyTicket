import React, { useState, useEffect } from 'react';

import { Container, Content, Label, TicketCard, PaymentCard, SidedInput, Footer, Price, Clickable, Buy } from './styles';
import { Input } from '../../globalStyles';

export default function Checkout({ navigation, route }) {

  const [ticketCards, setTicketCards] = useState([]);
  const { eventID, quantity, showPrice } = route.params;

  useEffect(() => {
    let data = [];
    for(let i = 0; i < quantity; i++){
      let string = 'Ingresso ' + (i + 1);
      data.push({ title: string});
    }
    setTicketCards(data);
  }, [])

  return (
    <Container >
      <Content>
        <Label style={{ marginBottom: 20}}>Ingressos</Label>
        {
          ticketCards.map((card, index) => (
            <TicketCard key={index}>
              <Label fontSize="16px" >Título do Evento - Ingresso 1</Label>
              <Input placeholder="Nome Completo" fontSize="16px"
                keyboardType='default'
                autoCapitalize='words'
                autoCorrect={false}
              />
              <Input placeholder="RG" fontSize="16px"
                keyboardType='numeric'
                autoCapitalize='none'
                autoCorrect={false}
              />
            </TicketCard>
          ))
        }
        
        <Label style={{ marginBottom: 20, marginTop: 15}}>Forma de Pagamento</Label>
        <PaymentCard style={{ marginBottom: 15}}>
          <Label fontSize="18px">Crédito</Label>
          <Input placeholder="Número do Cartão" fontSize="16px"
            keyboardType='numeric'
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Input placeholder="Nome impresso no Cartão" fontSize="16px"
            keyboardType='default'
            autoCapitalize='characters'
            autoCorrect={false}
          />
          <SidedInput >
            <Input placeholder="Mês de Validade" fontSize="16px" style={{ width: "45%"}}
              keyboardType='numeric'
              autoCapitalize='none'
              autoCorrect={false}
            />
            <Input placeholder="Ano de Validade" fontSize="16px" style={{ width: "45%"}}
              keyboardType='numeric'
              autoCapitalize='none'
              autoCorrect={false}
            />
          </SidedInput>
          
          <Input placeholder="Código de Segurnça" fontSize="16px"
            keyboardType='numeric'
            autoCapitalize='none'
            autoCorrect={false}
          />
        </PaymentCard>
      </Content>

      <Footer>
          <Price>Total: R$ {(showPrice).toFixed(2)}</Price>
          <Clickable onPress={() => navigation.navigate('Tickets')}>
            <Buy>FINALIZAR</Buy>
          </Clickable>
        </Footer>

    </Container>
  );
}
