import {StyleSheet} from 'react-native';
import {Poppins} from '../utils';
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
    },
    entriesListViewContainer: {
      flex: 9,
      paddingLeft: 15,
      alignItems: 'center',
    },
  });
};

export default HomeStyle;
