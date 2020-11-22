import moment from 'moment';

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
