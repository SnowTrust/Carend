import React, { useState } from 'react';
import { Text, View, Switch, Linking, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-eva-icons';
import SettingStyle from "../styles/Settings";

const Settings = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const style = SettingStyle();
  const [darkMode, setDarkMode] = useState(false);
  const [helper, setHelper] = useState(false);
  const [username, setUsername] = useState('Hermann');

  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
        <Icon
          name='arrow-ios-back'
          width={40}
          height={40}
          fill={colors.notification}
          style={style.headerIcon}
          onPress={() => navigation.navigate('Home')} />
        <Text style={style.headerText}>Settings</Text>
      </View>
      <View style={style.usernameContainer}>
        <TextInput
          style={style.username}
          onChangeText={value => setUsername(value)}
          value={username}
          underlineColorAndroid="transparent"
        />
        <Icon
          name='edit-2-outline'
          width={15}
          height={15}
          fill={colors.notification}
          style={style.usernameIcon} />
      </View>
      <Pressable style={style.menuItemContainer} onPress={() => setDarkMode(previousState => !previousState)}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Dark mode</Text>
          <Text style={style.menuTextHint}>Activates or desactivates the dark mode text in the App. Requires reloading the app.</Text>
        </View>
        <Switch
          trackColor={{ false: colors.primary, true: colors.border }}
          thumbColor={darkMode ? colors.primary : colors.border}
          ios_backgroundColor={colors.primary}
          onValueChange={() => setDarkMode(previousState => !previousState)}
          value={darkMode}
        />
      </Pressable>
      <Pressable style={style.menuItemContainer} onPress={() => setHelper(previousState => !previousState)}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Helper</Text>
          <Text style={style.menuTextHint}>Activates or desactivates the helper text in the editor.</Text>
        </View>
        <Switch
          trackColor={{ false: colors.primary, true: colors.border }}
          thumbColor={helper ? colors.primary : colors.border}
          ios_backgroundColor={colors.primary}
          onValueChange={() => setHelper(previousState => !previousState)}
          value={helper}
        />
      </Pressable>
      <Pressable style={style.menuItemContainer} onPress={() => Linking.openURL('https://www.snowtrust.fr/carend/bug-report/')}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Report a bug</Text>
          <Text style={style.menuTextHint}>Activates or desactivates the dark mode text in the App. Requires reloading the app.</Text>
        </View>
        <Icon
          name='arrow-forward-outline'
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable style={style.menuItemContainer} onPress={() => Linking.openURL('https://www.snowtrust.fr/carend/feature-request/')}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Request a feature</Text>
          <Text style={style.menuTextHint}>Activates or desactivates the dark mode text in the App. Requires reloading the app.</Text>
        </View>
        <Icon
          name='arrow-forward-outline'
          width={20}
          height={20}
          fill={colors.text}
          style={style.menuIcon}
        />
      </Pressable>
      <Pressable style={style.menuItemContainer} onPress={() => Linking.openURL('https://www.snowtrust.fr/carend/legal/')}>
        <View style={style.menuTextContainer}>
          <Text style={style.menuTextHeader}>Legal Notice</Text>
          <Text style={style.menuTextHint}>Some Legal things.</Text>
        </View>
        <Icon
          name='arrow-forward-outline'
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
          source={{
            uri: 'https://dummyimage.com/500x300/6e6e6e/ffffff.png'
          }}
        />
        <Text style={style.copyrightText}>Made with &#10084; by SnowTrust</Text>
      </View>
    </View>
  );
}

export default Settings;