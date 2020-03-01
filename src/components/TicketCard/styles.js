import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 130px;
  flex-direction: row;
  margin-bottom: 5px;
  border-radius: 10px;
`;

export const Image = styled.Image`
  width: 40%;
  height: 100%;
  background-color: blue;
`;

export const Content = styled.View`
  justify-content: space-between;
  padding: 5px;
  background-color: white;
  width:60%;
  opacity: 0.8;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const UserInfo = styled.Text`
  font-size: 14px;
  text-align: left;
`;

export const EventInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EventInfo = styled.Text`
  margin-top: 10px;
  font-size: 14px;
`;

