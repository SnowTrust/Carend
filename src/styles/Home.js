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
    },
    headerIcon: {
      color: colors.notification,
      flex: 1,
    },
    notebookContainer: {
      flex: 1,
    },
    notebookHeaderContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingLeft: 10,
      paddingRight: 50,
      marginBottom: 20,
    },
    notebookHeaderText: {
      flex: 4,
      fontFamily: Poppins.SemiBold,
      fontSize: 18,
    },
    notebookHeaderIcon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    notebookListViewContainer: {
      flex: 4,
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
      flex: 1,
      marginTop: 25,
    },
    entriesHeaderText: {
      flex: 1,
      fontFamily: Poppins.SemiBold,
      fontSize: 18,
      marginLeft: 10,
      marginBottom: 20,
    },
    entriesListViewContainer: {
      flex: 4,
      paddingLeft: 15,
      alignItems: 'center',
    },
  });
};

export default HomeStyle;
