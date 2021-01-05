export const _setDarkTheme = (state, action) => {
  state.darkTheme = !state.darkTheme;
};

export const _setHelperText = (state, action) => {
  state.helperText = !state.helperText;
};

export const _setUsername = (state, action) => {
  state.username = action.payload;
};

export const _setLanguage = (state, action) => {
  state.language = action.payload;
};

export const _setLastExport = (state, action) => {
  state.lastExport = action.payload;
};

export const _setLasImport = (state, action) => {
  state.lastImport = action.payload;
};

export const _restoreSettings = (state, action) => {
  const {language, username, helperText, darkTheme} = action.payload;
  state.language = language;
  state.username = username;
  state.helperText = helperText;
  state.darkTheme = darkTheme;
};
