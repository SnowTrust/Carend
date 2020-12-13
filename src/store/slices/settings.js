import {createSlice} from '@reduxjs/toolkit';
import {
  _setDarkTheme,
  _setLanguage,
  _setUsername,
  _setHelperText,
  _setLastExport,
  _setLasImport,
} from '../actions';

const initialState = {
  darkTheme: false,
  helperText: false,
  username: '',
  language: 'en',
  lastExport: null,
  lastImport: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkTheme: _setDarkTheme,
    setHelperText: _setHelperText,
    setUsername: _setUsername,
    setLanguage: _setLanguage,
    setLastImport: _setLasImport,
    setLastExport: _setLastExport,
  },
});

export default settingsSlice.reducer;
export const {
  setDarkTheme,
  setHelperText,
  setUsername,
  setLanguage,
  setLastImport,
  setLastExport,
} = settingsSlice.actions;
