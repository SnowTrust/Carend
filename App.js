/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import Navigation from './src/Navigation';
import Loading from './src/screens/Loading';
import Welcome from './src/screens/Welcome';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  if (firstTimeUser === true) {
    return (
      <Welcome
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setFirstTimeUser={setFirstTimeUser}
      />
    );
  }

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
