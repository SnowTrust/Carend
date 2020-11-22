import React from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import LoadingStyles from '../styles/Loading';

const Loading = () => {
  const styles = LoadingStyles();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        resizeMethod="auto"
        style={styles.logo}
        source={{
          uri: 'https://dummyimage.com/500x300/6e6e6e/ffffff.png',
        }}
      />
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Loading;
