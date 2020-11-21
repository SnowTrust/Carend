export const _addNote = (state, action) => {
  const {newNote, notebookId} = action.payload;
  state.notebooks[notebookId].push(newNote);
};

export const _updateNote = (state, action) => {
  const {newNote, notebookId} = action.payload;
  let toUpdate = state.notebooks[notebookId].find(
    (element) => element.id === newNote.id,
  );
  toUpdate.note = newNote.note;
};

export const _deleteNote = (state, action) => {
  const {noteId, notebookId} = action.payload;
  const noteIndex = state.notebooks[notebookId].findIndex(
    (element) => element.id === noteId,
  );
  state.notebooks[notebookId].splice(noteIndex, 1);
};
