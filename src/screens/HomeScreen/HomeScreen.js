import React, {Component} from 'react';
import {FlatList,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import {connect} from 'react-redux'

import { setCurrentNote } from '@actions';
import NotePreview from './NotePreview';

class HomeScreen extends Component {
  renderNote = ({item})=> {
    return (
      <NotePreview
        note = { item }
        onPress = {() => {
          this.props.navigation.navigate(
            'NoteScreen',
            {key:item.key,title:item.title,content:item.content});
        }}
      />
    );
  }
  render(){
    return(
      <View style = { styles.container }>
        <View style = { styles.headerContainer }>
          <Text style = { styles.headerTitle }>Notes</Text>
        </View>
        <FlatList
          data = {this.props.notes}
          renderItem = {this.renderNote}
        />
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('NoteScreen')}}>
        <Text style = { styles.addNote }>Add new note...</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  headerContainer: {
    height: 70,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    color: 'black',
  },
  addNote:{
    padding: 20,
    color: 'grey',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
});
function mapStateToProps(state) {
  const {content,title,notes}=state;
  return {content,title,notes }
}

const mapDispatchToProps = {
  setCurrentNote
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
