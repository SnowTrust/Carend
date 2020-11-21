import {createSlice} from '@reduxjs/toolkit';
import {
  _setDarkTheme,
  _setLanguage,
  _setUsername,
  _setHelperText,
} from '../actions';

const initialState = {
  darkTheme: false,
  helperText: false,
  username: '',
  language: 'en',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkTheme: _setDarkTheme,
    setHelperText: _setHelperText,
    setUsername: _setUsername,
    setLanguage: _setLanguage,
  },
});

export default settingsSlice.reducer;
export const {
  setDarkTheme,
  setHelperText,
  setUsername,
  setLanguage,
} = settingsSlice.actions;
