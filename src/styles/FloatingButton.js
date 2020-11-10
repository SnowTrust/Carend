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
            right: 15,
            bottom: Math.ceil(NAVIGATION_BAR) + 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
    })
}

export default FloattingButtonStyle;