import {createSlice} from '@reduxjs/toolkit';
import {_addNote, _updateNote, _deleteNote, _restoreNotes} from '../actions';

const initialState = {
  notebooks: {
    2021: [],
    2020: [],
    2019: [],
    2018: [],
    2017: [],
  },
};

const notebookSlice = createSlice({
  name: 'notebook',
  initialState,
  reducers: {
    addNote: _addNote,
    updateNote: _updateNote,
    deleteNote: _deleteNote,
    restoreNotes: _restoreNotes,
  },
});

export default notebookSlice.reducer;
export const {
  addNote,
  updateNote,
  deleteNote,
  restoreNotes,
} = notebookSlice.actions;
