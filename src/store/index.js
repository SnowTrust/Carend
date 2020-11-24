import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import createCompressor from 'redux-persist-transform-compress';
import {notebookReducer, settingsReducer} from './slices';

const compressor = createCompressor({
  whitelist: ['notebook'],
  blacklist: ['settings'],
});

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  transforms: [compressor],
};

const rootReducer = combineReducers({
  notebook: notebookReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

let persistor = persistStore(store);
export {store, persistor};
