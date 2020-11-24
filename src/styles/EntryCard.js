import {StyleSheet} from 'react-native';
import {Poppins} from '../utils';
import {useTheme} from '@react-navigation/native';

const EntryCardStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      height: 90,
      width: 300,
      padding: 10,
      marginBottom: 10,
      backgroundColor: colors.card,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    date: {
      color: colors.text,
      fontFamily: Poppins.SemiBold,
      fontSize: 16,
    },
    hour: {
      color: colors.notification,
      fontFamily: Poppins.SemiBold,
      fontSize: 10,
    },
    icon: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    },
    textContainer: {
      flex: 3,
      justifyContent: 'center',
      flexDirection: 'column',
    },
    mood: {
      flex: 1,
      height: 30,
      width: 30,
      fontSize: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
};

export default EntryCardStyle;
