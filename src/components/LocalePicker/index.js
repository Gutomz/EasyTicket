import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import { Container, Picker } from './styles';

import { connect } from 'react-redux'

function changeLocale(locale){
  return {
    type: 'CHANGE_LOCALE',
    locale: locale,
  }
}

const LocalePicker = ({ locale, dispatch }) => {

  const [localePicker, setLocalePicker] = useState('Campinas');

  useEffect(() => {
    if(localePicker !== locale)
      setLocalePicker(locale);
  }, [])

  function localeChange(value){
    setLocalePicker(value);

    dispatch(changeLocale(value));
  }

  return (
    <Container>
      
      <Entypo name="location" size={22} color="white"/>

      <Picker mode={Picker.MODE_DIALOG}
        accessibilityRole='text'
        selectedValue={localePicker}
        onValueChange={(value) => localeChange(value)}
      >
        <Picker.Item label="Campinas" value='Campinas' />
        <Picker.Item label="São Paulo" value='São Paulo' />
        <Picker.Item label="Americana" value='Americana' />
        <Picker.Item label="Paulínia" value='Paulínia' />
      </Picker>

    </Container>
  );
}

export default connect(state => ({ locale: state.locale }))(LocalePicker);
