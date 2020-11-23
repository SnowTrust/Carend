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
    this.style = props.style;
    this.slider = React.createRef();
    this.state = {
      username: '',
    };
  }

  _renderItem = ({item}) => {
    const {options} = item;
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        {options?.image && (
          <Image
            source={options.source}
            style={styles.image}
            resizeMode="contain"
            resizeMethod="auto"
          />
        )}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {options?.textInput && (
          <TextInput
            style={styles.textInput}
            placeholder={options.placeholder}
            placeholderTextColor={'rgba(255, 255, 255, 0.50)'}
          />
        )}
        {options?.button && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{options.buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
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
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          renderPagination={this._renderPagination}
          data={data}
          ref={(ref) => (this.slider = ref)}
        />
      </View>
    );
  }
}
