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

export const parseEntries = () => {};
