import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NoteList from './Screens/NoteList.js'
//import NewNote from './components/NewNote.js'
import EditNote from './components/EditNote.js'

const RootStack = createStackNavigator(
  {
    Home: NoteList,
    //Details: NewNote,
    Edit: EditNote,
  },

  {
    initialRouteName: 'Home',
  }
);
export default RootStack;
