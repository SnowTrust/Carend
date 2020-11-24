import {StyleSheet} from 'react-native';
import Poppins from '../utils/Poppins';
import {useTheme} from '@react-navigation/native';

const SearchStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 10,
    },
    headerIcon: {
      padding: 10,
    },
    headerContainer: {
      flexDirection: 'row',
    },
    headerText: {
      fontFamily: Poppins.Bold,
      fontSize: 25,
      flex: 4,
      textAlign: 'center',
      color: colors.text,
    },
  });
};

export default SearchStyle;
