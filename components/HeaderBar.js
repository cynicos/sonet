import React from 'react';
import { Appbar } from 'react-native-paper';

const HeaderBar = ({ navigation, previous }) => (
  <Appbar.Header>
    {previous && <Appbar.BackAction onPress={navigation.goBack} />}
    <Appbar.Content title='Sonet' />
  </Appbar.Header>
);

export default HeaderBar;
