import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #2E323D;
  width:100%;
  height: 100%;
  align-items: center;
  flex: 1;
`;
export const ScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
`;
export const Image = styled.Image`
  width: 100%;
  height: 180px;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-top: 10px;
`;
export const Subtitle = styled.Text`
  font-size: 14px;
  color: white;
  text-align: center;
  margin-top: 5px;
`;
export const Infos = styled.View`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
`;
export const H2 = styled.Text`
  font-size: 20px;
  color: white;
  text-align: left;
`;
export const H3 = styled.Text`
  font-size: 16px;
  color: white;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ClickableIcon = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  right: 5px;
  margin-top: 5px;
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

export const NumericContainer = styled.View`
  background-color: white;
  border-width: 1px;
  border-color: #707070;
  flex-direction: row;
  width: 35%;
  height: 65%;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 8px;
`;

export const Clickable = styled.TouchableOpacity`
`;

export const Number = styled.Text`
  font-size: 18px;
  text-align: center;
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
