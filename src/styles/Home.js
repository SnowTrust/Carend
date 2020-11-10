import { StyleSheet } from 'react-native';
import Poppins from '../utils/Poppins';
import { useTheme } from '@react-navigation/native';

const HomeStyle = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex:1,
            flexDirection: "column"
        },
        headerContainer: {
            flex: 1,
            flexDirection: 'row',
            padding: 10
        },
        headerText: {
            fontFamily: Poppins.Bold,
            fontSize: 25,
            flex: 4
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
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 50,
            marginBottom: 5
        },
        notebookHeaderText: {
            flex: 4,
            fontFamily: Poppins.SemiBold,
            fontSize: 18
        },
        notebookHeaderIcon: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        notebookListViewContainer: {
            flex: 4,
            paddingLeft: 10
        },
        activeYearCard: {
            backgroundColor: colors.primary,
            color: colors.background
        },
        card: {
            backgroundColor: colors.card
        },
        cardIcon: {
            color: colors.notification
        },
        descriptionText: {
            color: colors.notification
        },
        text: {
            color: colors.text
        },
    })
};

export default HomeStyle;
