import React, {Component} from 'react';
import {FlatList,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import {connect} from 'react-redux'

import { setCurrentNote } from '@actions';

 class HomeScreen extends Component {
  renderNotes = ({item})=> {
    return (
      <View style = {{backgroundColor:'white',flex:1}}>

        <TouchableOpacity
          onPress = {() => {
            this.props.setCurrentNote(item);
            this.props.navigation.navigate('NoteScreen',{key:item.key,title:item.title,content:item.content});
          }}
        >
        <Text style = { styles.title }>{item.title}</Text>
        <Text style = { styles.content }>{item.content}</Text>
      </TouchableOpacity>
        <Divider style = {{marginTop:5}}/>

      </View>
    );
  }
  render(){
    return(
      <View style = {styles.container}>
        <Text style = { styles.notes }>NOTES</Text>
        <FlatList
          data = {this.props.notes}
          renderItem = {this.renderNotes}
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
