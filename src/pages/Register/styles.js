import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #2E323D;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 177px;
  height: 59px;
`;

export const Form = styled.KeyboardAvoidingView`
  width: 75%;
  margin-top: 50px;
  margin-bottom: 30px;
  height: auto;
`;

export const Input = styled.TextInput`
  margin-top: 30px;
  border-bottom-width: 1px;
  border-color: #888888;
  color: #888888;
`;

export const DropDown = styled.Picker`
  margin-top: 30px;
  color: #888888;
  border: 1px;
`;
