import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { expo as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './store/configure';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName.name, () => RNRedux);