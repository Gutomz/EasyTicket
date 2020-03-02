import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #2E323D;
  width:100%;
  height: 100%;
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 20px;
`;

export const Label = styled.Text`
  color: ${props => props.color ? props.color : 'white'};
  font-size: ${props => props.fontSize ? props.fontSize : '20px'};
`;

export const TicketCard = styled.View`
  border-width: 1px;
  background: #363941;
  border-color: #707070;
  padding: 15px;
  margin-bottom: 15px;
`;

export const PaymentCard = styled.View`
  border-width: 1px;
  background: #363941;
  border-color: #707070;
  padding: 15px;
  margin-bottom: 15px;
`;

export const SidedInput = styled.View`
  flex-direction: row;
  justify-content:space-between;
`;

export const Footer = styled.View`
  background-color: #E81A3E;
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Clickable = styled.TouchableOpacity`
`;

export const Price = styled.Text`
  color: #FFE16A;
  font-size: 22px;
  margin: 10px;
`;
export const Buy = styled.Text`
  color: white;
  font-size: 22px;
`;