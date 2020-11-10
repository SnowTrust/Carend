import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import EntryCardStyle from "../styles/EntryCard";
import { useNavigation } from "@react-navigation/native";

const EntryCard = (props) => {
    const { date, hour } = props;
    const style = EntryCardStyle();
    const { colors } = useTheme(); 
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.hour}>{hour}</Text>
                <Text style={style.date}>{date}</Text>
            </View>
            <Icon
                name='arrow-ios-forward'
                width={30}
                height={30}
                fill={colors.notification}
                style={style.icon}
                onPress={() => navigation.navigate('Write')} />
        </View>
    );
}

export default EntryCard;