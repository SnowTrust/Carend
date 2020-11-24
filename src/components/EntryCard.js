import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View, Pressable} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import EntryCardStyle from '../styles/EntryCard';
import {useNavigation} from '@react-navigation/native';
import {formatEntryForCard} from '../utils';

const EntryCard = (props) => {
  const {data} = props;
  const {hour, date} = formatEntryForCard(data);
  const style = EntryCardStyle();
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <Pressable
      style={style.container}
      onPress={() =>
        navigation.navigate('Write', {
          _mood: data.mood,
          _note: data.note,
          _id: data.id,
          _date: data.date,
        })
      }>
      <View style={style.textContainer}>
        <Text style={style.hour}>{hour}</Text>
        <Text style={style.date}>{date}</Text>
      </View>
      <Icon
        name="arrow-ios-forward"
        width={30}
        height={30}
        fill={colors.notification}
        style={style.icon}
      />
    </Pressable>
  );
};

export default EntryCard;
