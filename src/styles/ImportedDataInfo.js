import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Poppins} from '../utils';

const ImportedDataInfoStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.text,
    },
    text: {
      color: colors.text,
    },
    bold: {
      fontFamily: Poppins.Bold,
    },
    center: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default ImportedDataInfoStyle;
