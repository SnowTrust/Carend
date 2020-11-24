import React from 'react';
import {Text, Pressable} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import NoteBookCardStyle from '../styles/NoteBookCard';

const NoteBookCard = (props) => {
  const navigation = useNavigation();
  const {year, entries} = props;
  const active = year === moment().format('YYYY');
  const style = NoteBookCardStyle(active);
  return (
    <Pressable
      style={style.container}
      onPress={() => {
        navigation.navigate('Search', {year});
      }}>
      <Text style={style.year}>{year}</Text>
      <Text style={style.entries}>
        {entries} {entries === 1 ? 'Entry' : 'Entries'}
      </Text>
    </Pressable>
  );
};

export default NoteBookCard;
