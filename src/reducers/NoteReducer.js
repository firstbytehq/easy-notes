import { ADD_NOTES, EDIT_NOTES, DELETE_NOTE } from '../actions/types'
import _ from 'lodash'

const initialState = {
  id: 0,
  Notes:[{title:'hello',content:'haii'},
      {title:'sdghg',content:'jhdcjf'}
]

}

export default (state = initialState, action) => {
  console.log('paylaod',action.payload);
  switch(action.type) {

    case ADD_NOTES:
     console.log('reducerNote',state.title);
     let newNotes = [];
     newNotes.push(action.payload)
     return {...state, Notes:newNotes};

    case EDIT_NOTES:
      console.log('titleeeeee',state.title);
     console.log('contentttttt',state.content);
     let editedNotes= [];
     editedNotes.push(action.payload)
      return {...state,Notes:editedNotes}



     case DELETE_NOTE:
       console.log('deletee',id);
       return state.filter(Notes=>Notes.id!==action.payload.id)

    default:
      return state
  }
}
