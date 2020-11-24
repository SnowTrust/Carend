/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import Navigation from './src/Navigation';
import Loading from './src/screens/Loading';
import Welcome from './src/screens/Welcome';
import {saveCredentials, loadCredentials} from './src/utils';

const App = () => {
  useEffect(() => {
    async function anyNameFunction() {
      let result = await loadCredentials();
      if (result !== null) {
        setFirstTimeUser(false);
      }
      setIsReady(true);
    }
    anyNameFunction();
  }, []);

  const [firstTimeUser, setFirstTimeUser] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const saveUserData = async (username) => {
    await saveCredentials(username, username);
    setFirstTimeUser(false);
  };

  if (isReady === false) {
    return <Loading />;
  }

  if (firstTimeUser === true && isReady === true) {
    return <Welcome saveUserData={saveUserData} />;
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
