import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Poppins} from '../utils';

const WriteStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      flexDirection: 'column',
    },
    writingBoxContainer: {
      flex: 8,
    },
    writingBox: {
      flex: 9,
    },
    moodContainer: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: colors.card,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    headerDayContainer: {
      marginLeft: 10,
      fontFamily: Poppins.Bold,
      fontSize: 20,
      color: colors.text,
    },
    headerDateContainer: {
      marginLeft: 10,
      fontFamily: Poppins.Light,
      fontSize: 20,
      color: colors.text,
    },
    headerIcon: {
      padding: 10,
    },
    textStylingContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    activeMood: {
      height: 30,
      width: 30,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: 'rgba(0, 144, 251, 0.2)',
      borderRadius: 15,
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    inactiveMood: {
      height: 30,
      width: 30,
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    moodText: {
      fontFamily: Poppins.SemiBold,
      color: colors.notification,
    },
    containerStyle: {
      paddingVertical: 0,
      backgroundColor: colors.card,
      flex: 1,
    },
    editorStyle: {
      backgroundColor: colors.card,
      marginVertical: 15,
      color: colors.text,
    },
    toolbarStyle: {
      backgroundColor: colors.backgroundColor,
      zIndex: 100,
    },
    viewStyle: {
      paddingTop: 15,
      backgroundColor: colors.card,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flex: 1,
    },
    scrollStyle: {
      paddingHorizontal: 15,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
  });
};

export default WriteStyle;
