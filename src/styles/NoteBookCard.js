import {StyleSheet} from 'react-native';
import Poppins from '../utils/Poppins';
import {useTheme} from '@react-navigation/native';

const NoteBookCardStyle = (active) => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      width: 100,
      padding: 10,
      marginRight: 10,
      backgroundColor: active === true ? colors.primary : colors.card,
      borderRadius: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    year: {
      color: active === true ? colors.background : colors.notification,
      fontFamily: Poppins.SemiBold,
      fontSize: 20,
    },
    entries: {
      color: active === true ? colors.background : colors.notification,
      fontFamily: Poppins.SemiBold,
    },
  });
};

export default NoteBookCardStyle;
