/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigation';
import {store} from './app_store';
import {DETAIL} from 'navigation/route';
import {SCHEMA} from 'navigation/deeplink';

import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const persistor = persistStore(store);

const config = {
  screens: {
    [DETAIL]: 'detail/:id',
  },
};

const linking = {
  prefixes: [SCHEMA],
  config: config,
};

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer linking={linking}>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
