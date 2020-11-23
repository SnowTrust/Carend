import {StyleSheet} from 'react-native';
import Poppins from '../utils/Poppins';
import {useTheme} from '@react-navigation/native';

const HomeStyle = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      flexDirection: 'column',
    },
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
    },
    headerText: {
      fontFamily: Poppins.Bold,
      fontSize: 25,
      flex: 4,
      color: colors.text,
    },
    headerIcon: {
      color: colors.notification,
      flex: 1,
    },
    notebookContainer: {
      flex: 3,
    },
    notebookHeaderContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 50,
      marginBottom: 5,
    },
    notebookHeaderText: {
      flex: 1,
      fontFamily: Poppins.SemiBold,
      fontSize: 18,
      color: colors.text,
    },
    notebookHeaderIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    notebookListViewContainer: {
      flex: 7,
      paddingLeft: 15,
    },
    activeYearCard: {
      backgroundColor: colors.primary,
      color: colors.background,
    },
    yearCard: {
      backgroundColor: colors.card,
      color: colors.notification,
    },
    entriesContainer: {
      flex: 6,
      marginTop: 10,
    },
    entriesHeaderText: {
      flex: 1,
      fontFamily: Poppins.SemiBold,
      fontSize: 18,
      marginLeft: 10,
      color: colors.text,
    },
    entriesListViewContainer: {
      flex: 9,
      paddingLeft: 15,
      alignItems: 'center',
    },
    emptyEntries: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      color: colors.notification,
    },
    EmptyEntriesIcon: {
      flex: 1,
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    EmptyEntriesText: {
      color: colors.text,
    },
  });
};

export default HomeStyle;
