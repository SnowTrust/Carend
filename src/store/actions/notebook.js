import moment from 'moment';

export const _addNote = (state, action) => {
  const {newNote, notebookId} = action.payload;
  state.notebooks[notebookId].push(newNote);
  if (state.notebooks[notebookId].length > 2) {
    state.notebooks[notebookId].sort((a, b) => moment(a.date).isBefore(b.date));
  }
};

export const _updateNote = (state, action) => {
  const {newNote, notebookId} = action.payload;
  let toUpdate = state.notebooks[notebookId].find(
    (element) => element.id === newNote.id,
  );
  toUpdate.mood = newNote.mood;
  toUpdate.note = newNote.note;
};

export const _deleteNote = (state, action) => {
  const {noteId, notebookId} = action.payload;
  const noteIndex = state.notebooks[notebookId].findIndex(
    (element) => element.id === noteId,
  );
  state.notebooks[notebookId].splice(noteIndex, 1);
};

export const _restoreNotes = (state, action) => {
  state.notebooks = action.payload.notebooks;
};
