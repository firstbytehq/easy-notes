import {
 ADD_NOTES,
 EDIT_NOTES,
 DELETE_NOTE
} from './types'

export const addNote = (title,content)=> {
  console.log('newnotess',title);
  return {
    type: ADD_NOTES,
    payload: {title:title,content:content}
  }
}

export const editNote = (title,content)=> {
  console.log('actionedittt',title);
  console.log('actionContent',content);

  return {
    type: EDIT_NOTES,
    payload: {title:title,content:content}
  }
}

export const deleteNote = (id)=> {
  console.log('idddd',id);
  return {
    type: DELETE_NOTE,
    payload: {id}
  }
}
