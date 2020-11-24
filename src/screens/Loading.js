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
        source={require('../../assets/images/logo-long.png')}
      />
      <ActivityIndicator size={'large'} color="#3782ec" />
    </View>
  );
};

export default Loading;
