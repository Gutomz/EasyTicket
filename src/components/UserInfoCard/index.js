import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import { Container, Infos, InfoTitle, Info, Icon } from './styles';

export default function UserInfoCard({ title, info , onPress, editable}) {
  return (
    <Container onPress={onPress}>
      <Infos>
        <InfoTitle>{title}</InfoTitle>
        <Info>{info}</Info>
      </Infos>
      <Icon>
        {editable ? <AntDesign name="right" size={16} color="white" /> : null}
      </Icon>
    </Container>
  );
}
