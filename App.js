/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Navigation} from './src/utils';
import {Loading} from './src/screens';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
