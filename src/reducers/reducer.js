import shortid from 'shortid';

import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SET_CURRENT_NOTE
} from '@constants/actionTypes';

const initialState = { notes: [], currentNote: {} }

export default (state = initialState, action) => {
  const { type, payload } = action;

  let notes;

  switch(type) {
    case ADD_NOTE:
      const { title, content } = payload;
      const key = shortid.generate();
      notes = [...state.notes, { title, content, key }]
      return {...state, notes};

    case EDIT_NOTE:
      let editedNotes= [];
      editedNotes.push(action.payload)
      return {...state,Notes:editedNotes}

    case DELETE_NOTE:
      notes = state.notes.filter(note => note.key !== payload);
      return { ...state, notes }

    case SET_CURRENT_NOTE:
      return { ...state, currentNote: payload }

    default:
      return state
  }
}
