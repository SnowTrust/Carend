import {StyleSheet} from 'react-native';
import {Poppins} from '../utils';
import {useTheme} from '@react-navigation/native';

const IEStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingBottom: 3,
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
    menuItemContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: {
      fontFamily: Poppins.Light,
      fontSize: 12,
      height: 'auto',
      color: colors.notification,
    },
    buttonsContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
    },
    button: {
      flex: 1,
      margin: 20,
      backgroundColor: colors.primary,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    confirmButton:{
      margin: 20,
      backgroundColor: colors.primary,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: colors.text,
      fontFamily: Poppins.SemiBold,
    },
    dataContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
  });
};

export default IEStyles;
