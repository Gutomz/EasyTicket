import styled from 'styled-components/native';

export const Input = styled.TextInput`
  margin-top: 30px;
  border-bottom-width: 1px;
  border-color: #888888;
  color: #888888;
  font-size: ${props => props.fontSize ? props.fontSize : '14px'};
`;