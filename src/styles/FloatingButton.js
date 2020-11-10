import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { NAVIGATION_BAR } from '../utils/constants';

const FloattingButtonStyle = () => {
    const { colors } = useTheme();
    return StyleSheet.create({
        container: {
            height: 60,
            width: 60,
            position: "absolute",
            backgroundColor: colors.primary,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
            right: 20,
            bottom: Math.ceil(NAVIGATION_BAR) + 50
        }
    })
}

export default FloattingButtonStyle;