import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import HomeStyle from '../styles/Home';

const EmptyEntries = () => {
  const {colors} = useTheme();
  const styles = HomeStyle();
  return (
    <View style={styles.EmptyEntries}>
      <Text style={styles.EmptyEntriesText}>
        You have no entries yet, start by writting a note
      </Text>
      <View style={styles.EmptyEntriesIcon}>
        <Icon
          name="edit-2-outline"
          width={100}
          height={100}
          fill={colors.notification}
        />
      </View>
    </View>
  );
};

export default EmptyEntries;
