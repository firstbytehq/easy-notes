import React, {Component} from 'react';
import {FlatList,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Divider, TextInput } from 'react-native-paper';
import {connect} from 'react-redux'

 class HomeScreen extends Component {
  static navigationOptions = { header: null }

  renderNotes = ({item})=> {
    console.log('rendernifg',item.title);
    console.log('notelist id',item.id);
    return (
      <View style = {{backgroundColor:'white',flex:1}}>

        <TouchableOpacity onPress={ () => this.props.navigation.navigate('NoteScreen',{id:item.id,title:item.title,content:item.content})}>
        <Text style = { styles.title }>{item.title}</Text>
        <Text style = { styles.content }>{item.content}</Text>
      </TouchableOpacity>
        <Divider style = {{marginTop:5}}/>

      </View>
    );
  }
  render(){
    console.log('note',this.props.Notes);
    return(
      <View style = {styles.container}>
        <Text style = { styles.notes }>NOTES</Text>
        <FlatList
          data = {this.props.Notes}
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
  const {content,title,Notes}=state;
  console.log('title',title);
  console.log('content',content);
  return {content,title,Notes }
}



export default connect(mapStateToProps)(HomeScreen)
