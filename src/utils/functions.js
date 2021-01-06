import moment from 'moment';
import {ToastAndroid} from 'react-native';
import * as Keychain from 'react-native-keychain';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

export const formatNotebooks = (notebooks) => {
  const returnData = [];
  let keys = Object.keys(notebooks);
  keys.forEach((key) => {
    returnData.push({
      year: key,
      entries: notebooks[key].length,
    });
  });
  return returnData;
};

export const formatEntryForCard = (item) => {
  return {
    date: moment(item.date).format('dddd D'),
    hour: moment(item.date).format('h:mm a'),
  };
};

export const findEntry = (notebook, date) => {
  const year = moment(date).format('YYYY');
  const found = notebook[year]?.find(
    (entry) =>
      moment(entry.date).format('D-MM-YYYY') ===
      moment(date).format('D-MM-YYYY'),
  );
  return found;
};

export const saveCredentials = async (username, password) => {
  return await Keychain.setGenericPassword(username, password);
};

export const loadCredentials = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Keychain couldn't be accessed!", error);
  }
};

export const getGreetingTime = (m) => {
  var g = null; //return g

  if (!m || !m.isValid()) {
    return;
  } //if we can't find a valid or filled moment, we return.

  var split_afternoon = 12; //24hr time to split the afternoon
  var split_evening = 17; //24hr time to split the evening
  var currentHour = parseFloat(m.format('HH'));

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    g = 'afternoon';
  } else if (currentHour >= split_evening) {
    g = 'evening';
  } else {
    g = 'morning';
  }

  return g;
};

export const getMarkedDates = (notebook) => {
  const returnData = {};
  for (const entry of notebook) {
    let date = moment(entry.date).format('YYYY-MM-D');
    returnData[String(date)] = {marked: true};
  }
  return returnData;
};

export const writeFile = async (data, fileName) => {
  try {
    const filePath = `${RNFS.ExternalStorageDirectoryPath}/Carend/Backup/${fileName}`;
    await RNFS.mkdir(`${RNFS.ExternalStorageDirectoryPath}/Carend/Backup/`);
    const srtingifiedData = JSON.stringify(data);
    const result = await RNFS.writeFile(filePath, srtingifiedData);
    ToastAndroid.show(`File saved at ${filePath}`, ToastAndroid.LONG);
    return filePath;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteFile = async (filePath) => {
  try {
    const result = await RNFS.unlink(filePath);
    return result;
  } catch (err) {
    throw err;
  }
};

export const readFile = async (res) => {
  try {
    const absPath = await RNFetchBlob.fs.stat(res.uri);
    const result = await RNFS.readFile(absPath.path);
    const data = await JSON.parse(result);
    return data;
  } catch (err) {
    throw err;
  }
};
