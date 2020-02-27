import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes'

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2E323D"/>
      <Routes/>
    </>
  );
}

