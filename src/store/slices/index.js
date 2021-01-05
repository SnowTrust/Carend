import notebookReducer, {
  addNote,
  updateNote,
  deleteNote,
  restoreNotes,
} from './note';
import settingsReducer, {
  setDarkTheme,
  setHelperText,
  setUsername,
  setLanguage,
  setLastExport,
  setLastImport,
  restoreSettings,
} from './settings';

export {
  notebookReducer,
  settingsReducer,
  addNote,
  updateNote,
  deleteNote,
  setDarkTheme,
  setHelperText,
  setLanguage,
  setUsername,
  setLastExport,
  setLastImport,
  restoreSettings,
  restoreNotes,
};
