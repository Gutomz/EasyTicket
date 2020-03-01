import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import { Container, Picker } from './styles';

export default function LocalePicker( ) {

  const [locale, setLocale] = useState('null');

  function localeChange(value){
    setLocale(value);
  }

  return (
    <Container>
      
      <Entypo name="location" size={22} color="white"/>

      <Picker mode={Picker.MODE_DIALOG}
        accessibilityRole='text'
        selectedValue={locale}
        onValueChange={(value) => localeChange(value)}
      >
        <Picker.Item label="Campinas" value='campinas' />
        <Picker.Item label="São Paulo" value='São Paulo' />
        <Picker.Item label="Americana" value='Americana' />
        <Picker.Item label="Paulínia" value='Paulínia' />
      </Picker>

    </Container>
  );
}
