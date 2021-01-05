import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImportedDataInfoStyles from '../styles/ImportedDataInfo';

const ImportedDataInfo = ({data}) => {
  const styles = ImportedDataInfoStyles();

  if (data === null || data === undefined) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nothing found</Text>
      </View>
    );
  }

  const {notebook, settings} = data;
  let notebookNumber = Object.keys(notebook.notebooks);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={[styles.headingText, styles.text, styles.bold]}>
          Data recovered
        </Text>
        <Text style={[styles.text, styles.bold]}>
          &#128211; {notebookNumber.length} notebooks
        </Text>
      </View>
      {notebookNumber.map((item) => {
        return (
          <Text style={styles.text} key={item}>
            {item} : {notebook?.notebooks[item]?.length} entries
          </Text>
        );
      })}
      <View style={styles.center}>
        <Text style={[styles.text, styles.bold]}> &#x2699;Settings</Text>
        <Text style={styles.text}>Name: {settings.username}</Text>
        <Text style={styles.text}>
          Helper text: {settings.helperText === true ? 'Enabled' : 'Disabled'}
        </Text>
        <Text style={styles.text}>Language: {settings.language}</Text>
        <Text style={styles.text}>
          Dark theme: {settings.darkTheme === true ? 'Enabled' : 'Disabled'}
        </Text>
      </View>
    </View>
  );
};

export default ImportedDataInfo;
