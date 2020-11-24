import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import moment from 'moment';
import {CalendarList} from 'react-native-calendars';
import {getMarkedDates, findEntry, Poppins} from '../utils';
import SearchStyles from '../styles/Search';

const Search = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const {colors} = useTheme();
  const {year} = props?.route?.params;
  const {notebooks} = useSelector((state) => state.notebook);
  const styles = SearchStyles();
  const navigation = useNavigation();
  useEffect(() => {
    let _markedDates = getMarkedDates(notebooks[year]);
    setMarkedDates(_markedDates);
    setIsReady(true);
  }, [notebooks, year]);

  const searchEntryAndNavigate = (dateString) => {
    setIsReady(false);
    const entry = findEntry(notebooks, dateString);
    navigation.navigate('Write', {
      _mood: entry.mood,
      _note: entry.note,
      _id: entry.id,
      _date: entry.date,
    });
  };

  if (isReady === false) {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Icon
            name="arrow-ios-back"
            width={40}
            height={40}
            fill={colors.notification}
            style={styles.headerIcon}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.headerText}>{year}</Text>
        </View>
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-ios-back"
          width={40}
          height={40}
          fill={colors.notification}
          style={styles.headerIcon}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.headerText}>{year}</Text>
      </View>
      <CalendarList
        current={moment().format('YYYY-MM-DD')}
        minDate={moment(`${year}-01-01`).format('YYYY-MM-DD')}
        maxDate={moment(`${year}-12-01`).format('YYYY-MM-DD')}
        onDayPress={(day) => {
          if (markedDates[day.dateString]) {
            searchEntryAndNavigate(day.dateString);
          }
        }}
        monthFormat={'MMMM'}
        markedDates={markedDates}
        firstDay={1}
        pastScrollRange={Number(moment().format('MM')) - 1}
        futureScrollRange={12 - moment().format('MM')}
        scrollEnabled={true}
        showScrollIndicator={false}
        disabledByDefault={false}
        style={{borderWidth: 0}}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.background,
          textSectionTitleColor: colors.text,
          textSectionTitleDisabledColor: colors.notification,
          selectedDayBackgroundColor: colors.background,
          selectedDayTextColor: colors.text,
          todayTextColor: colors.primary,
          dayTextColor: colors.text,
          textDisabledColor: colors.notification,
          dotColor: colors.primary,
          selectedDotColor: colors.primary,
          monthTextColor: colors.text,
          indicatorColor: colors.primary,
          textDayFontFamily: Poppins.Regular,
          textMonthFontFamily: Poppins.SemiBold,
          textDayHeaderFontFamily: Poppins.Regular,
          textDayFontWeight: '300',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default Search;
