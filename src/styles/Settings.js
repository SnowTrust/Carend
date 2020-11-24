import {StyleSheet} from 'react-native';
import {Poppins} from '../utils';
import {useTheme} from '@react-navigation/native';

const SettingsStyle = () => {
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
    menuItemContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuIcon: {
      flex: 1,
    },
    menuTextContainer: {
      flexDirection: 'column',
      flex: 4,
      height: 'auto',
    },
    menuTextHeader: {
      fontFamily: Poppins.SemiBold,
      height: 'auto',
      color: colors.text,
    },
    menuTextHint: {
      fontFamily: Poppins.Light,
      fontSize: 12,
      height: 'auto',
      color: colors.notification,
    },
    copyrightContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center"
    },
    copyrightText: {
      textAlign: 'center',
      fontFamily: Poppins.Light,
      fontSize: 8,
      color: colors.text,
    },
    logo: {
      width: 320,
      height: 320,
      margin: 10,
      alignContent: "center"
    },
    username: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: Poppins.SemiBoldItalic,
      fontSize: 18,
      color: colors.text,
    },
    usernameContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    usernameIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
  });
};

export default SettingsStyle;
