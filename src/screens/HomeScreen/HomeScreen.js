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
      <View style = {styles.container}>
        <Text style = { styles.notes }>Notes</Text>
        <FlatList
          data = {this.props.notes}
          renderItem = {this.renderNote}
        />
        <Divider style = {{marginTop:230}}/>
        <TouchableOpacity onPress = {() => {this.props.navigation.navigate('NoteScreen')}}>
        <Text style = { styles.addNote }>Add Notes</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  notes:{
    fontSize:28,
    color:'black',
    marginTop:25,
    marginLeft:20,
    marginBottom:30
  },
  title:{
    fontSize:20,
    color:'black',
    margin:15,

  },
  content:{
    fontSize:18,
    marginLeft:15
  },
  addNote:{
    margin:20,
    fontSize:18
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
