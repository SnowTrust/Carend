import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {addNote, updateNote, deleteNote} from '../store/slices';
import WriteStyle from '../styles/Write';
import Emoji from 'react-native-emoji';
import WritingBox from '../components/WritingBox';
import {MoodList, helperText as helpText} from '../utils';

const Write = (props) => {
  const {_mood, _note, _id, _date} = props?.route?.params || {};

  const [mood, setMood] = useState(_mood);
  const [note, setNote] = useState(_note);
  const [editorDisabled, setEditor] = useState(false);

  const navigation = useNavigation();
  const {colors} = useTheme();
  const style = WriteStyle();

  const shouldUpdateByDate =
    moment().format('YYYY-MM-D') === moment(_date).format('YYYY-MM-D');

  const dispatch = useDispatch();
  const {notebooks} = useSelector((state) => state.notebook);
  const {helperText} = useSelector((state) => state.settings);

  const deleteAndExit = () => {
    const noteId = _id;
    const notebookId = moment(_date).format('YYYY');
    dispatch(deleteNote({noteId, notebookId}));
    navigation.navigate('Home');
  };

  const saveAndExit = () => {
    if (mood?.length > 0 || (note?.length > 0 && note !== helpText)) {
      const notebookId = moment().format('YYYY');
      if (
        shouldUpdateByDate === true &&
        _id !== null &&
        notebooks[notebookId]?.length !== undefined
      ) {
        // Updating here
        const newNote = {
          mood,
          note,
          date: _date,
          id: _id,
        };
        dispatch(updateNote({newNote, notebookId}));
      } else if (_id === null) {
        // Adding note here
        const newNote = {
          mood,
          note,
          date: moment().format(),
          id:
            notebooks[notebookId]?.length !== undefined
              ? notebooks[notebookId]?.length
              : 0,
        };
        dispatch(addNote({newNote, notebookId}));
      }
    }
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (shouldUpdateByDate === false) {
      setEditor(true);
    }
  }, [shouldUpdateByDate]);

  return (
    <View style={style.container}>
      <View style={style.iconContainer}>
        <Icon
          name="arrow-ios-back"
          width={40}
          height={40}
          fill={colors.notification}
          style={style.headerIcon}
          onPress={() => saveAndExit()}
        />
        {_id !== null && (
          <Icon
            name="trash-outline"
            width={30}
            height={30}
            fill={'#dc3545'}
            style={style.headerIcon}
            onPress={() => {
              deleteAndExit();
            }}
          />
        )}
      </View>

      <Text style={style.headerDayContainer}>
        {moment(_date).format('dddd')}
      </Text>
      <Text style={style.headerDateContainer}>
        {moment(_date).format('MMMM D')}
      </Text>
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
            note={note}
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
                  if (shouldUpdateByDate === true) {
                    setMood(mood === moodId ? '' : moodId);
                  }
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
