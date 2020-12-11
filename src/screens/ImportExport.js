import React, {useState} from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {useTheme, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Share from 'react-native-share';
import {writeFile, deleteFile, readFile} from '../utils';
import IEStyles from '../styles/ImportExport';

const ImportExport = () => {
  const style = IEStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const [retrievedData, setRetrievedData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isErrored, setErrored] = useState(false);
  const state = useSelector((state) => state);

  const exportData = async (data) => {
    try {
      setLoading(true);
      const filePath = await writeFile(data);
      const options = {
        title: 'Carend backup',
        subject: 'Carend backup',
        message:
          'Hello,\nI have made a backup of my Carend.\nCan you please save it somewhere safe ?\nIt is a diary and you can get it here https://play.google.com/store/apps/details?id=com.snowtrust.carend\n\nThanks <3.',
        type: 'text/plain',
        excludedActivityTypes: [],
        url: `file://${filePath}`,
      };
      await Share.open(options);
      await deleteFile(filePath);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrored(true);
    }
  };

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
      <View style={style.dataContainer}>
        {isLoading === true ? (
          <ActivityIndicator size={'large'} color={colors.primary} />
        ) : retrievedData === null ? (
          <Text>Noting</Text>
        ) : (
          <Text>Daata</Text>
        )}
      </View>
      <View style={style.buttonsContainer}>
        <Pressable style={style.button}>
          <Text style={style.buttonText}>Import</Text>
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => {
            exportData(state);
          }}>
          <Text style={style.buttonText}>Export</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImportExport;
