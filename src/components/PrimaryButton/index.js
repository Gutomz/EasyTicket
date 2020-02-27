import React from 'react';
import { View } from 'react-native';

import { BContainer, BText } from './styles';

export default function PrimaryButton(props) {
  return (
    <BContainer onPress={props.onPress}>
      <BText>{props.title}</BText>
    </BContainer>
  );
}
