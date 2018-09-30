import React, {Component} from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'

import AppRouter from '@routers/AppRouter.js';
import { store, persistor } from '@config/store';

export default class App extends Component{
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
     </StoreProvider>
    );
  }
}
