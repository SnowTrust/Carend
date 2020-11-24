import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../styles/Welcome';
import {welcomeScreenData as data} from '../utils';
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.saveUserData = props.saveUserData.bind(this);
    this.state = {
      username: '',
    };
  }

  checkData = (index, lastIndex) => {
    const {username} = this.state;
    switch (index) {
      case 3:
        if (username === '' || username === null) {
          this.slider?.goToSlide(lastIndex, true);
        }
        break;
      default:
        break;
    }
  };

  _renderItem = ({item}) => {
    const {options} = item;
    return (
      <ImageBackground
        style={[styles.slide, styles.backgroundImage]}
        source={item.bg}>
        {options?.image && (
          <Image
            source={options.source}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="auto"
          />
        )}
        <Text
          style={[
            styles.title,
            options?.textWhite === true && {color: '#fdfdfd'},
          ]}>
          {item.title}
        </Text>
        <Text
          style={[
            styles.text,
            options?.textWhite === true && {color: '#fdfdfd'},
          ]}>
          {item.text}
        </Text>
        {options?.textInput && (
          <TextInput
            style={styles.textInput}
            placeholder={options.placeholder}
            placeholderTextColor={'rgba(255, 255, 255, 0.50)'}
            onChangeText={(text) => {
              if (options.value === 'username') {
                this.setState({username: text});
              }
            }}
            value={this.state[options.value]}
          />
        )}
        {options?.button && (
          <TouchableOpacity
            style={styles.button}
            disabled={!this.state.username}
            onPress={() => {
              if (this.state.username) {
                this.saveUserData(this.state.username);
              }
            }}>
            <Text style={styles.buttonText}>{options.buttonText}</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    );
  };

  _keyExtractor = (item) => item.title;

  _renderPagination = (activeIndex) => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.dot,
                  i === activeIndex
                    ? {backgroundColor: 'white'}
                    : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                ]}
                onPress={() => this.slider?.goToSlide(i, true)}
              />
            ))}
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
          ref={(ref) => (this.slider = ref)}
          onSlideChange={(index, lastIndex) => {
            this.checkData(index, lastIndex);
          }}
        />
      </View>
    );
  }
}
