import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator, PermissionsAndroid } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';
import moment from 'moment';
import { setLastImport, setLastExport } from '../store/slices';
import { writeFile, deleteFile, readFile } from '../utils';
import IEStyles from '../styles/ImportExport';

const ImportExport = () => {
  const style = IEStyles();
  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [retrievedData, setRetrievedData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isErrored, setErrored] = useState(false);
  const state = useSelector((state) => state);

  const exportData = async (data) => {
    try {
      setLoading(true);
      const exportDate = moment().format('YYYYMMD_hhmmss');
      const fileName = `Carend_backup_${exportDate}.json`;
      const filePath = await writeFile(data, fileName);
      const options = {
        title: fileName,
        subject: fileName,
        message:
          'Hello,\nI have made a backup of my Carend.\nCan you please save it somewhere safe ?\nIt is a diary and you can get it here https://play.google.com/store/apps/details?id=com.snowtrust.carend\n\nThanks <3.',
        type: 'application/json',
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

  const requestCameraPermission = async () => {
    try {
      const options = {
        title: "Carend would like to access your files",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "Grant"
      };
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, options);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        setCanRead(false);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const importData = async () => {
    try {
      setLoading(true);
      const res = await DocumentPicker.pick({
        type: 'application/json',
      });
      const data = await readFile(res);
      console.log(data);
      setLoading(false);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        setErrored(true);
      }
      setLoading(false);
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
        <Pressable
          disabled={isLoading}
          style={style.button}
          onPress={() => {
            importData();
          }}>
          <Text style={style.buttonText}>Import</Text>
        </Pressable>
        <Pressable
          disabled={isLoading}
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
