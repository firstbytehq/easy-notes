import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import { purgeStoredState } from 'redux-persist'
import reducers from '../reducers';

const persistConfig = { key: 'store', storage }
//purgeStoredState(persistConfig)
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer,applyMiddleware(ReduxThunk));
let persistor = persistStore(store)

export { store, persistor };
