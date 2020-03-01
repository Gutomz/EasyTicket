import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
    contentContainerStyle: {alignItems: 'center'},
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  margin-bottom: 20px;
`;

export const QRCode = styled.Image`
  width: 120px;
  height: 120px;
  background: #fff;
`;

export const Infos = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const UserNameInfo = styled.Text`
  color: white;
  text-align: center;
`;

export const UserDocumentInfo = styled.Text`
  color: white;
  text-align: center;
`;

export const TicketInfos = styled.View`
  border-top-width: 1px;
  border-color: #707070;
  width: 85%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 5px;
`;

export const TicketBuyDate = styled.Text`
  color: white;
  text-align: center;
`;

