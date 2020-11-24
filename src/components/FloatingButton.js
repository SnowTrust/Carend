import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import FloatingButtonStyle from '../styles/FloatingButton';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {findEntry} from '../utils';

const FloatingButton = () => {
  const style = FloatingButtonStyle();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {notebooks} = useSelector((state) => state.notebook);
  const entry = findEntry(notebooks, moment());
  return (
    <Pressable
      style={style.container}
      onPress={() =>
        navigation.navigate('Write', {
          _mood: entry?.mood || '',
          _note: entry?.note || '',
          _id: entry?.id === 0 ? entry?.id : entry?.id || null,
          _date: entry?.date || moment().format(),
        })
      }>
      <Icon name="edit" width={25} height={25} fill={colors.background} />
    </Pressable>
  );
};

export default FloatingButton;
