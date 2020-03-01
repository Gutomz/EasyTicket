import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: #363941;
  flex: 1;
`;

export const Bar = styled.View`
  width: 95%;
  height: 100%;
  justify-content: center;
`;

export const Input = styled.TextInput`
  border-radius: 30px;
  border-width: 1px;
  border-color: #888888;
  padding-left: 35px;
  width: 100%;
  color: #888888;
  background-color: #363941;
`;

export const IconContainer = styled.View`
  position: absolute;
  left: 10px;
`;


