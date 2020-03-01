import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Input, IconContainer, Bar } from './styles';

export default function SearchBar({ setTextFunction }) {

  const [text, setText] = useState('');

  function textChange(value){
    setText(value);
    if(setTextFunction) setTextFunction(value);
  }

  return (
    <Container >

      <Bar>
        <Input
          placeholder='Pesquisar'
          placeholderTextColor='#888888'
          value={text}
          onChangeText={textChange}
        >
        </Input>

        <IconContainer>
          <FontAwesome name='search' size={16} color='#888888'/>
        </IconContainer>
      </Bar>
      
    </Container>
  );
}
