import shortid from 'shortid';

import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  SET_CURRENT_NOTE
} from '@constants/actionTypes';

const initialState = { notes: [], currentNote: {} }

export default (state = initialState, action) => {
  console.log(action);
  
  const { type, payload } = action;

  switch(type) {
    case ADD_NOTE: {
      const { title, content } = payload;
      if (title || content) {
        // Add a note only if either title or content is present.
        const key = shortid.generate();
        const notes = [...state.notes, { title, content, key }]
        return {...state, notes};
      }
      return { ...state }
    }

    case EDIT_NOTE: {
      const { title, content, key } = payload;
      let notes;
      notes = state.notes.filter(note => note.key !== key);
      notes = [...notes, { title, content, key }];
      return {...state, notes};
    }

    case DELETE_NOTE: {
      const notes = state.notes.filter(note => note.key !== payload);
      return { ...state, notes }
    }

    case SET_CURRENT_NOTE:
      return { ...state, currentNote: payload }

    default:
      return state
  }
}
