import shortid from 'shortid';

import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '@constants/actionTypes';

const initialState = { notes: [] }

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case ADD_NOTE:
      const { title, content } = payload;
      const key = shortid.generate();
      const notes = [...state.notes, { title, content, key }]
      return {...state, notes};

    case EDIT_NOTE:
      let editedNotes= [];
      editedNotes.push(action.payload)
      return {...state,Notes:editedNotes}

    case DELETE_NOTE:
      return state.filter(Notes=>Notes.id!==action.payload.id)

    default:
      return state
  }
}
