import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import NoteBookStyle from "../styles/NoteBook";

const NoteBook = (props) => {
    console.log(props)
    const { year, active, entries } = props;
    const style = NoteBookStyle();
    return (
        <View style={style.container}>
            <Text style={style.year}>{year}</Text>
            <Text style={style.entries}>{entries} Entries</Text>
        </View>
    );
}

export default NoteBook;