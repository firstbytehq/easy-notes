import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import {connect} from 'react-redux';

import {addNote, editNote, deleteNote} from '@actions';
import NoteScreenHeader from './NoteScreenHeader';

class NoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key:this.props.navigation.getParam('key'),
      title: this.props.navigation.getParam('title'),
      content: this.props.navigation.getParam('content')
    }
  }

  onBackButtonPress = () => {
    const { title, content, key } = this.state;
    if (key) {
      // We are editing an existing note
      this.props.editNote({ title, content, key });
    }
    else {
      // We are adding a new note.
      this.props.addNote({ title, content });
    }
    this.props.navigation.goBack();
  }

  onDeleteButtonPress = () => {
    const { key } = this.state;
    this.props.deleteNote(key);
    this.props.navigation.goBack();
  }

  render() {
    const {title,content,id} = this.state;
    return (
      <View style = { styles.container } >
        <NoteScreenHeader
          onBackButtonPress = { this.onBackButtonPress }
          onDeleteButtonPress = { this.onDeleteButtonPress }
        />
        <TextInput
          style = { styles.title }
          onChangeText={(text) => this.setState({title:text})}
          placeholder= 'Title'
          value={this.state.title}
        >
        </TextInput>
        <TextInput
          style = { styles.content }
          multiline = {true}
          onChangeText={(text) => this.setState({content:text})}
          value={this.state.content}
          placeholder= 'Content'
        >
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
    paddingHorizontal: 20,
  },
  title:{
    fontSize:25,
    marginBottom: '2%'
  },
  content:{
    fontSize:20,
  },
});

function mapStateToProps(state) {
  const { content,title,id}=state;
  return { content,title,id }
}

export default connect(mapStateToProps,{ editNote,deleteNote,addNote })(NoteScreen)
