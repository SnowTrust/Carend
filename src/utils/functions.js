import moment from 'moment';
import * as Keychain from 'react-native-keychain';
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
  const found = notebook[year].find(
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

export const writeFile = async (data) => {
  try {
    const {fs, base64} = RNFetchBlob;
    const filePath = `${fs.dirs.DocumentDir}/Carend_${moment().format( 
      'YYYYMMD_hhmmss',
    )}.json
    `;
    const srtingifiedData = JSON.stringify(data);
    let result = await fs.createFile(
      filePath,
      base64.encode(srtingifiedData),
      'base64',
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteFile = async (filePath) => {
  try {
    const {fs} = RNFetchBlob;
    const result = await fs.unlink(filePath);
    return result;
  } catch (err) {
    throw err;
  }
};

export const readFile = async (filePath) => {
  try {
    const {fs} = RNFetchBlob;
    const result = await fs.readFile(filePath, 'base64');
    console.log(result);
    const data = JSON.parse(result);
    return data;
  } catch (err) {
    throw err;
  }
};
