import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import FloatingButtonStyle from "../styles/FloatingButton";
import { useNavigation } from "@react-navigation/native";
import { View } from 'react-native';

const EntryCard = () => {
    const style = FloatingButtonStyle();
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <Icon
                name='edit'
                width={25}
                height={25}
                fill={colors.background}
                onPress={() => navigation.navigate('Write')} />
        </View>
    );
}

export default EntryCard;