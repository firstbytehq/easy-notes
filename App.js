
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import AddNote from './src/components/AddNote.js';
//import NoteText from './src/components/NoteText';
import RootStack from './src/RootStack.js';
import { createStore } from 'redux'
import rootReducer from './src/reducers'
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/config';


export default class App extends Component{
  render(props) {
    return (
      <StoreProvider store={store} style={styles.container}>
        <PersistGate loading={null} persistor={persistor}>
        {/* <Provider store = {store}> */}
        <RootStack {...props}/>
        {/* </Provider> */}
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
