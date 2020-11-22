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
