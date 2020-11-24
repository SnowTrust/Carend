import moment from 'moment';
import * as Keychain from 'react-native-keychain';

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
	
	if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.
	
	var split_afternoon = 12 //24hr time to split the afternoon
	var split_evening = 17 //24hr time to split the evening
	var currentHour = parseFloat(m.format("HH"));
	
	if(currentHour >= split_afternoon && currentHour <= split_evening) {
		g = "afternoon";
	} else if(currentHour >= split_evening) {
		g = "evening";
	} else {
		g = "morning";
	}
	
	return g;
}
