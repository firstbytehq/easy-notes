import {
 ADD_NOTE,
 EDIT_NOTE,
 DELETE_NOTE
} from '@constants/actionTypes'

export const addNote = ({title, content})=> {
  return {
    type: ADD_NOTE,
    payload: {title, content}
  }
}

export const editNote = (title,content)=> {
  return {
    type: EDIT_NOTES,
    payload: {title:title,content:content}
  }
}

export const deleteNote = (id)=> {
  return {
    type: DELETE_NOTE,
    payload: {id}
  }
}
