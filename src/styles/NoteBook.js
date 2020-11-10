import { StyleSheet } from 'react-native';
import Poppins from '../utils/Poppins';
import { useTheme } from '@react-navigation/native';

const NoteBookStyle = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            height: 150,
            width: 100,
            padding: 10,
            marginRight: 10,
            backgroundColor: colors.primary,
            borderRadius: 20,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        year: {
            color: colors.background,
            fontFamily: Poppins.SemiBold,
            fontSize: 20
        },
        entries: {
            color: colors.background,
            fontFamily: Poppins.SemiBold
        }
    })
}

export default NoteBookStyle;