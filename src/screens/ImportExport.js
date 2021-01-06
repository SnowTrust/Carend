import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {useTheme, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';
import Share from 'react-native-share';
import moment from 'moment';
import {
  setLastImport,
  setLastExport,
  restoreNotes,
  restoreSettings,
} from '../store/slices';
import {writeFile, readFile} from '../utils';
import ImportedDataInfo from '../components/ImportedDataInfo';
import IEStyles from '../styles/ImportExport';

const ImportExport = () => {
  const style = IEStyles();
  const {colors} = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [retrievedData, setRetrievedData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isErrored, setErrored] = useState(false);
  const [isImport, setImport] = useState(false);
  const [isImportAchieved, setImportAchieved] = useState(false);
  const [canReadAndWrite, setCanReadAndWrite] = useState(false);
  const state = useSelector((state) => state);
  let {lastImport, lastExport} = state.settings;

  const exportData = async (data) => {
    try {
      setLoading(true);
      const exportDate = moment().format('YYYYMMD_hhmmss');
      const fileName = `${exportDate}.json`;
      const filePath = await writeFile(data, fileName);
      const options = {
        title: fileName,
        subject: fileName,
        message:
          'Hello,\nI have made a backup of my Carend.\nCan you please save it somewhere safe ?\nIt is a diary and you can get it here https://play.google.com/store/apps/details?id=com.snowtrust.carend\n\nThanks <3.',
        type: 'application/json',
        excludedActivityTypes: [],
        url: `file://${filePath}`,
        failOnCancel: false,
      };
      await dispatch(setLastExport(moment().format()));
      await Share.open(options);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrored(true);
    }
  };

  const requestFilePermissions = async () => {
    try {
      const options = {
        title: 'Carend would like to access your files',
        message:
          'Cool Photo App needs access to your filrs ' +
          'so you can export and import your backup.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'Grant',
      };
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ],
        options,
      );
      if (
        granted['android.permission.READ_EXTERNAL_STORAGE'] &&
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        setCanReadAndWrite(true);
      } else {
        setCanReadAndWrite(false);
      }
    } catch (err) {
      setErrored(true);
    }
  };

  const importData = async () => {
    try {
      setLoading(true);
      const res = await DocumentPicker.pick({
        type: 'application/json',
      });
      const data = await readFile(res);
      setRetrievedData(data);
      setImport(true);
      setLoading(false);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        setErrored(true);
      }
      setLoading(false);
    }
  };

  const confirmImport = async () => {
    setLoading(true);
    const {notebook, settings} = retrievedData;
    await dispatch(restoreSettings(settings));
    await dispatch(restoreNotes(notebook));
    await dispatch(setLastImport(moment().format()));
    setLoading(false);
    setImportAchieved(true);
  };

  useEffect(() => {
    requestFilePermissions();
  }, []);

  if (isErrored) {
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
        <ScrollView contentContainerStyle={style.dataContainer}>
          <Text style={[style.text, style.textCenter]}>An error occurred</Text>
        </ScrollView>
      </View>
    );
  }

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
      <ScrollView contentContainerStyle={style.dataContainer}>
        {isLoading === true ? (
          <ActivityIndicator size={'large'} color={colors.primary} />
        ) : isImport === false ? (
          <View style={[style.flex_1, style.center]}>
            <Text style={[style.text, style.textCenter]}>
              &#9888; Please make sure the backup file is available offline on
              your device. &#9888;{'\n\n'}
              Backup files are always saved on your device at the path:
              /Carend/Backup/(Date).json
            </Text>
          </View>
        ) : isImportAchieved === false ? (
          <View style={[style.flex_1, style.center]}>
            <ImportedDataInfo data={retrievedData} />
            <Pressable
              style={style.confirmButton}
              onPress={() => confirmImport()}>
              <Text style={style.buttonText}>Confirm importation</Text>
            </Pressable>
          </View>
        ) : (
          <View style={[style.flex_1, style.center]}>
            <Icon
              name="checkmark-outline"
              width={40}
              height={40}
              fill={colors.notification}
              style={style.ConfirmIcon}
            />
            <Text style={[style.text, style.textCenter]}>Import achieved.</Text>
          </View>
        )}
      </ScrollView>
      <View style={style.buttonsContainer}>
        <Pressable
          disabled={isLoading && canReadAndWrite}
          style={style.button}
          onPress={() => {
            importData();
          }}>
          <Text style={style.buttonText}>Import</Text>
          <Text style={style.textHint}>
            Last import{'\n'}
            {lastImport === null
              ? 'Never'
              : moment(lastImport).format('YYYY-MM-D hh:mm:ss')}
          </Text>
        </Pressable>
        <Pressable
          disabled={isLoading && canReadAndWrite}
          style={style.button}
          onPress={() => {
            exportData(state);
          }}>
          <Text style={style.buttonText}>Export</Text>
          <Text style={style.textHint}>
            Last export{'\n'}
            {lastExport === null
              ? 'Never'
              : moment(lastExport).format('YYYY-MM-D hh:mm:ss')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ImportExport;
