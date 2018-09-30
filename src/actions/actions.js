import {
 ADD_NOTE,
 EDIT_NOTE,
 DELETE_NOTE,
 SET_CURRENT_NOTE
} from '@constants/actionTypes'

export const addNote = ({title, content})=> {
  return {
    type: ADD_NOTE,
    payload: {title, content}
  }
}

export const editNote = note => {
  return {
    type: EDIT_NOTE,
    payload: note
  }
}

export const deleteNote = key => {
  return {
    type: DELETE_NOTE,
    payload: key
  }
}

export const setCurrentNote = note => {
  return {
    type: SET_CURRENT_NOTE,
    payload: note
  }
}
