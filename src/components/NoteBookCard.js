import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import NoteBookCardStyle from "../styles/NoteBookCard";

const NoteBookCard = (props) => {
    const { year, entries } = props;
    const active = year === moment().year();
    const style = NoteBookCardStyle(active);
    return (
        <View style={style.container}>
            <Text style={style.year}>{year}</Text>
            <Text style={style.entries}>{entries} Entries</Text>
        </View>
    );
}

export default NoteBookCard;