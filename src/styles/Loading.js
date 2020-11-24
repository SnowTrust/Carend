import {StyleSheet} from 'react-native';

const LoadingStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      margin: 10,
      width: 320,
      height: 320,
    },
  });
};

export default LoadingStyle;
