import React from 'react';
import {Text, View, FlatList} from 'react-native';
import HomeStyle from '../styles/Home';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import {useDimensions} from '@react-native-community/hooks';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {formatNotebooks} from '../utils';
import {
  EntryCard,
  NoteBookCard,
  FloatingButton,
  EmptyEntries,
} from '../components';

const Home = () => {
  const navigation = useNavigation();
  const style = HomeStyle();
  const {colors} = useTheme();
  const {width} = useDimensions().window;
  const colNumber = ~~(width / 310); // need this to be int
  const {notebooks} = useSelector((state) => state.notebook);
  const {username} = useSelector((state) => state.settings);
  const notebookData = formatNotebooks(notebooks);
  return (
    <>
      <FloatingButton />
      <View
        style={style.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>
            Good Morning, {'\n'}
            {username}
          </Text>
          <Icon
            name="menu-2"
            width={40}
            height={40}
            fill={colors.notification}
            style={style.headerIcon}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
        {/* Notebooks */}
        <View style={style.notebookContainer}>
          <View style={style.notebookHeaderContainer}>
            <Text style={style.notebookHeaderText}>Your Notebooks</Text>
            <Icon
              name="more-horizontal"
              width={30}
              height={30}
              fill={colors.notification}
              style={style.notebookHeaderIcon}
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
          <View style={style.notebookListViewContainer}>
            <FlatList
              horizontal
              data={notebookData.reverse()}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return <NoteBookCard entries={item.entries} year={item.year} />;
              }}
              keyExtractor={(item) => String(item.year)}
            />
          </View>
        </View>
        {/* Entries */}
        <View style={style.entriesContainer}>
          <Text style={style.entriesHeaderText}>Recent Entries</Text>
          <View style={style.entriesListViewContainer}>
            <FlatList
              data={notebooks[moment().format('YYYY')]}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return <EntryCard data={item} />;
              }}
              keyExtractor={(item) => String(item.id)}
              ListEmptyComponent={EmptyEntries}
              numColumns={colNumber}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;
