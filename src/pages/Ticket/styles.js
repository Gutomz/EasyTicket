import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #2E323D;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const Image = styled.Image`
  height: 40%;
  background: blue;
  margin-bottom: 10px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const CardContent = styled.View`
  flex : 1;
  padding: 0 10px;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  text-align: center;
  font-size: 14px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const H2 = styled.Text`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;

export const H3 = styled.Text`
  text-align: left;
  font-size: 14px;
`;

export const ShowMore = styled.TouchableOpacity`
  width: 100%;
  background: #E81A3E;
  height:40px;
  justify-content: center;
`;

export const ShowMoreText = styled.Text`
  font-size: 16px;
  color:#fff;
  text-align: center;
`;

export const CardFooter = styled.View`
  background: #eee;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
