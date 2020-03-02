import React, { useState, useEffect } from 'react';

import { Input } from '../../globalStyles'
import PrimaryButton from '../../components/PrimaryButton'
import { Container, Content } from './styles';

export default function EditUserInfo({ navigation, route }) {

  const [text, setText] = useState('');
  const { info, setInfo, setEdited } = route.params;

  useEffect(() => {
    setText(info);
  }, [])

  function onPress(){
    setInfo(text);
    setEdited(true);
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <Input placeholder={"Informação"} fontSize="20px"
          value={text}
          onChangeText={setText}
        />

        <PrimaryButton title="SALVAR" onPress={() => onPress()}/>
      </Content>
    </Container>
  );
}
