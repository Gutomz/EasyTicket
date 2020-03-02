import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-height: 90px;
  background: white;
  flex-direction: row;
  padding-bottom: 10px;
  background: #2E323D;
`;


export const Infos = styled.View`
  width: 80%;
  padding-top: 20px;
  padding-bottom: 5px;
  margin-left: 20px;
  border-color: #AAA;
  border-bottom-width: 1px;
`;

export const InfoTitle = styled.Text`
  font-size: 20px;
  color: white;
`;

export const Info = styled.Text`
  font-size: 16px;
  color: #BBB;
`;

export const Icon = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  border-color: #AAA;
  border-bottom-width: 1px;
  margin-right: 20px;
`;
