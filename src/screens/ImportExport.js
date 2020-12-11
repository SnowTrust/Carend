import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {useTheme, useNavigation} from '@react-navigation/native';
import IEStyles from '../styles/ImportExport';

const ImportExport = () => {
  const style = IEStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Icon
          name="arrow-ios-back"
          width={40}
          height={40}
          fill={colors.notification}
          style={style.headerIcon}
          onPress={() => navigation.navigate('Settings')}
        />
        <Text style={style.headerText}>Import and Export</Text>
      </View>
      <Text style={style.description}>Last export: </Text>
      <View style={style.buttonsContainer}>
          <Pressable style={style.button}>
              <Text style={style.buttonText}>Import</Text>
          </Pressable>
          <Pressable style={style.button}>
              <Text style={style.buttonText}>Export</Text>
          </Pressable>
      </View>
    </View>
  );
};

export default ImportExport;
