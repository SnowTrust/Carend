import React from 'react';
import {View, Text} from 'react-native';
import SearchStyles from '../styles/Search';
import {useSelector} from 'react-redux';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';

const Search = (props) => {
  const {colors} = useTheme();
  const {year} = props?.route?.params;
  const {notebooks} = useSelector((state) => state.notebook);
  const styles = SearchStyles();
  const navigation = useNavigation();
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
