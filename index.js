import { AppRegistry } from 'react-native';
import React from 'react';

import App from './App';
// import Foodapp from './food'
import FoodApp from './foodapp'
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore()

const RNRedux = () => (
    <Provider store={store}>
        <FoodApp />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
