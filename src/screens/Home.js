import React from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import HomeStyle from '../styles/Home';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import NoteBook from '../components/NoteBook';

const Home = () => {
  const data = [
    { year: 2020, entries: 100 },
    { year: 2019, entries: 10 },
    { year: 2018, entries: 200 },
    { year: 2017, entries: 200 },
    { year: 2016, entries: 200 },
  ]
  const navigation = useNavigation();
  const style = HomeStyle();
  const { colors } = useTheme();
  return (
    <ScrollView style={style.container} nestedScrollEnabled={true}>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>Good Morning, {`\n`}Hermann</Text>
        <Icon
          name='menu-2'
          width={40}
          height={40}
          fill={colors.notification}
          style={style.headerIcon}
          onPress={() => navigation.navigate('Settings')} />
      </View>
      <View style={style.notebookContainer}>
        <View style={style.notebookHeaderContainer}>
          <Text style={style.notebookHeaderText}>Your Notebooks</Text>
          <Icon
            name='more-horizontal'
            width={30}
            height={30}
            fill={colors.notification}
            style={style.notebookHeaderIcon}
            onPress={() => navigation.navigate('Settings')} />
        </View>
        <FlatList
          horizontal
          style={style.notebookListViewContainer}
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            console
            return (
              <NoteBook entries={item.entries} year={item.year} />
            )
          }}
          keyExtractor={(item) => item.year}
        />
      </View>
    </ScrollView>
  );
};

export default Home;