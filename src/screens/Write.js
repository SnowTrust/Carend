import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {addNote, updateNote} from '../store/slices/note';
import WriteStyle from '../styles/Write';
import Emoji from 'react-native-emoji';
import WritingBox from '../components/WritingBox';
import MoodList from '../utils/MoodList';

const Write = (props) => {
  const {_mood, _note, _id, _date} = props?.route?.params || {};

  const [mood, setMood] = useState('' || _mood);
  const [note, setNote] = useState('' || _note);
  const [editorDisabled, setEditor] = useState(false);

  const navigation = useNavigation();
  const {colors} = useTheme();
  const style = WriteStyle();

  const shouldUpdate = _date && moment().isSame(moment(_date), 'd');
  console.debug(shouldUpdate);

  const dispatch = useDispatch();
  const {notebooks} = useSelector((state) => state.notebook);
  const {helperText} = useSelector((state) => state.settings);

  const saveAndExit = () => {
    const notebookId = moment().format('YYYY');
    if (shouldUpdate === true) {
      // Updating here
      const newNote = {
        mood,
        note,
        date: _date,
        id: _id,
      };
      dispatch(updateNote({newNote, notebookId}));
    } else {
      // Adding note here
      const newNote = {
        mood,
        note,
        date: moment().format(),
        id:
          notebooks[notebookId].length !== undefined
            ? notebooks[notebookId].length
            : 0,
      };
      dispatch(addNote({newNote, notebookId}));
    }
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (shouldUpdate === false) {
      setEditor(true);
    }
  }, [shouldUpdate]);

  return (
    <View style={style.container}>
      <Icon
        name="arrow-ios-back"
        width={40}
        height={40}
        fill={colors.notification}
        style={style.headerIcon}
        onPress={() => saveAndExit()}
      />
      <Text style={style.headerDayContainer}>{moment().format('dddd')}</Text>
      <Text style={style.headerDateContainer}>{moment().format('MMMM D')}</Text>
      <View style={style.textStylingContainer} />
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
            freestyle={!helperText}
            disabled={editorDisabled}
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
                onPress={() => {
                  setMood(mood === moodId ? '' : moodId);
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Write;
