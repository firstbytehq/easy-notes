import React, {Component} from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import AppRouter from '@routers/AppRouter.js';
import rootReducer from '@reducers';
import { store, persistor } from '@config';

export default class App extends Component{
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
