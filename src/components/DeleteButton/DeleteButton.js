import React from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';

import { deleteNote } from '@actions';

const DeleteButton = (props) =>
  props.currentNote ?
  <Button
    icon = 'delete'
    onPress={() => {
      props.navigation.navigate('HomeScreen');
      props.deleteNote(props.currentNote.key);
    }}
  /> :
  null

const mapStateToProps = state => ({
  currentNote: state.currentNote
})

export default connect(mapStateToProps, { deleteNote })(withNavigation(DeleteButton));
