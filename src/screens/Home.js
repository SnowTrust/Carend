import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import HomeStyle from '../styles/Home';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-eva-icons';
import {useDimensions} from '@react-native-community/hooks';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {formatNotebooks} from '../utils/functions';
import EmptyEntries from '../components/EmptyEntries';
import EntryCard from '../components/EntryCard';
import NoteBookCard from '../components/NoteBookCard';
import FloatingButton from '../components/FloatingButton';
import {setUsername} from '../store/slices';
import {loadCredentials, getGreetingTime} from '../utils';
import Loading from './Loading';

const Home = () => {
  const navigation = useNavigation();
  const style = HomeStyle();
  const {colors} = useTheme();
  const {width} = useDimensions().window;
  const [isReady, setIsReady] = useState(false);
  const colNumber = ~~(width / 310); // need this to be int
  const dispatch = useDispatch();
  const {notebooks} = useSelector((state) => state.notebook);
  const {username} = useSelector((state) => state.settings);
  const notebookData = formatNotebooks(notebooks);
  const greetings = getGreetingTime(moment());
  let entries = notebooks[moment().format('YYYY')];

  useEffect(() => {
    async function anyNameFunction() {
      let result = await loadCredentials();
      if (result !== null) {
        dispatch(setUsername(result.username));
        setTimeout(() => {
          setIsReady(true);
        }, 1500);
      }
    }
    anyNameFunction();
  }, [dispatch]);

  if (isReady === false) {
    return <Loading />;
  }

  return (
    <>
      <FloatingButton />
      <View
        style={style.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={style.headerContainer}>
          <Text style={style.headerText}>
            Good {greetings}, {'\n'}
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
              data={entries}
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
