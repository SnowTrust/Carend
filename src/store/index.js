import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {notebookReducer, settingsReducer} from './slices';

const rootReducer = combineReducers({
  notebook: notebookReducer,
  settings: settingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
