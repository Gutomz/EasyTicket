import styled from 'styled-components/native';

export const Container = styled.View`
  width: 50%;
  height: 180px;
  max-width: 50%;
  max-height: 180px;
  background-color: white;
  border-radius: 10px;
  flex: 1;
  margin: 10px;
`;

export const ClickableEvent = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  flex: 1;
`;

export const ClickableIcon = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  right: 5px;
  margin-top: 5px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  background-color: grey;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Infos = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Info = styled.Text`
  font-size: 12px;

`;

