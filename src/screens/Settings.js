import React from 'react';
import {
  Text,
  View,
  Switch,
  Linking,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  setLanguage,
  setUsername,
  setHelperText,
  setDarkTheme,
} from '../store/slices';
import {Icon} from 'react-native-eva-icons';
import SettingStyle from '../styles/Settings';

const Settings = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const style = SettingStyle();

  const dispatch = useDispatch();
  const {darkTheme, helperText, language, username} = useSelector(
    (state) => state.settings,
  );
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Icon
          name="arrow-ios-back"
          width={40}
          height={40}
          fill={colors.notification}
          style={style.headerIcon}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={style.headerText}>Settings</Text>
      </View>
      <View style={style.usernameContainer}>
        <TextInput
          style={style.username}
          onChangeText={(value) => dispatch(setUsername(value))}
          value={username}
          underlineColorAndroid="transparent"
        />
        <Icon
          name="edit-2-outline"
          width={15}
          height={15}
          fill={colors.notification}
          style={style.usernameIcon}
        />
      </View>
      <Pressable
        style={style.menuItemContainer}
        onPress={() => dispatch(setDarkTheme())}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Dark mode</Text>
          <Text style={style.menuTextHint}>
            &#127770; Activates or &#127773;desactivates the dark theme.
          </Text>
        </View>
        <Switch
          trackColor={{false: colors.primary, true: colors.border}}
          thumbColor={darkTheme ? colors.primary : colors.border}
          ios_backgroundColor={colors.primary}
          onValueChange={() => dispatch(setDarkTheme())}
          value={darkTheme}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() => dispatch(setHelperText())}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Helper</Text>
          <Text style={style.menuTextHint}>
            &#128171; Activates or desactivates the helper text in the editor.
          </Text>
        </View>
        <Switch
          trackColor={{false: colors.primary, true: colors.border}}
          thumbColor={helperText ? colors.primary : colors.border}
          ios_backgroundColor={colors.primary}
          onValueChange={() => dispatch(setHelperText())}
          value={helperText}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() => navigation.navigate('Import-Export')}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Reminders</Text>
          <Text style={style.menuTextHint}>
            &#128190; Set reminders to get notifications to write.
          </Text>
        </View>
        <Icon
          name="arrow-forward-outline"
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() => navigation.navigate('Import-Export')}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Export or import data</Text>
          <Text style={style.menuTextHint}>
            &#128190; Export or import all the data in and encoded file.
          </Text>
        </View>
        <Icon
          name="arrow-forward-outline"
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() =>
          Linking.openURL('https://www.snowtrust.fr/carend/bug-report/')
        }>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Report a bug</Text>
          <Text style={style.menuTextHint}>
            &#128297;Noticed an bug or a typo, tell us here an we'll fix it
            ASAP.
          </Text>
        </View>
        <Icon
          name="arrow-forward-outline"
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() =>
          Linking.openURL('https://www.snowtrust.fr/carend/feature-request/')
        }>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Request a feature</Text>
          <Text style={style.menuTextHint}>
            &#9889;Have a brilliant idea? Tell us how to bring it to life.
          </Text>
        </View>
        <Icon
          name="arrow-forward-outline"
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable
        style={style.menuItemContainer}
        onPress={() =>
          Linking.openURL('https://www.snowtrust.fr/carend/legal/')
        }>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Legal Notice</Text>
          <Text style={style.menuTextHint}>&#128196;Some Legal things.</Text>
        </View>
        <Icon
          name="arrow-forward-outline"
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <View style={style.copyrightContainer}>
        <Image
          resizeMode="contain"
          resizeMethod="auto"
          style={style.logo}
          source={require('../../assets/images/logo-long.png')}
        />
        <Text style={style.copyrightText}>Made with &#10084; by SnowTrust</Text>
      </View>
    </View>
  );
};

export default Settings;
