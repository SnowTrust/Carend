import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import moment from 'moment';
import WriteStyle from '../styles/Write'
import Emoji from 'react-native-emoji';
import WritingBox from '../components/WritingBox';
import MoodList from '../utils/MoodList';

const Write = (props) => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const navigation = useNavigation();
  const { colors } = useTheme();
  // const { mood, text, isBold, isItalic, isLTR, isRTL } = props.route.params || null;
  const style = WriteStyle();
  return (
    <View style={style.container}>
      <Icon
        name='arrow-ios-back'
        width={40}
        height={40}
        fill={colors.notification}
        style={style.headerIcon}
        onPress={() => navigation.navigate('Home')} />
      <Text style={style.headerDayContainer}>{moment().format('dddd')}</Text>
      <Text style={style.headerDateContainer}>{moment().format('MMMM D')}</Text>
      <View style={style.textStylingContainer}></View>
      <View style={style.writingBoxContainer}>
        <View style={style.writingBox}>
          <WritingBox
            containerStyle={style.containerStyle}
            editorStyle={style.editorStyle}
            toolbarStyle={style.toolbarStyle}
            scrollStyle={style.scrollStyle}
            viewStyle={style.viewStyle}
            colors={colors}
            setNote={setNote}
            freestyle={false}
          />
        </View>
        <View style={style.moodContainer}>
          <Text style={style.moodText}>My mood</Text>
          {MoodList.map((moodId, index) => {
            return (
              <Emoji
                name={moodId}
                key={index}
                style={mood === moodId ? style.activeMood : style.inactiveMood}
                onPress={() => { setMood(mood === moodId ? '' : moodId) }}
              />)
          })}
        </View>
      </View>
    </View>
  );
}

export default Write;