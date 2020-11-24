import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import {getMarkedDates} from '../utils';
import SearchStyles from '../styles/Search';

const Search = (props) => {
  const [isReady, setIsReady] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const {colors} = useTheme();
  const {year} = props?.route?.params;
  const {notebooks} = useSelector((state) => state.notebook);
  const styles = SearchStyles();
  const navigation = useNavigation();

  console.log(markedDates);
  useEffect(() => {
    let _markedDates = getMarkedDates(notebooks[year]);
    setMarkedDates(_markedDates);
    setIsReady(true);
  }, [notebooks, year]);

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
          <Text style={styles.headerText}>Search</Text>
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
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
        <Text style={styles.headerText}>Search</Text>
      </View>
    </View>
  );
};

export default Search;
