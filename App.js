import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import AppRouter from '@routers/AppRouter.js';
import rootReducer from '@reducers';
import { store, persistor } from '@config';


export default class App extends Component{
  render() {
    return (
      <StoreProvider store={store} style={styles.container}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
     </StoreProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
