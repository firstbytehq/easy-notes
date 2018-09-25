import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-paper';
import {connect} from 'react-redux';
import {editNote,addNote} from '../actions';
import { deleteNote } from '../actions'

class EditNote extends Component {
  static navigationOptions = {
    headerRight: <Button icon = 'delete' onPress={() => {this.onDelete(id)}} />
  };

  constructor(props) {
    super(props)

    this.state = {
      id:this.props.navigation.getParam('id'),
      title: this.props.navigation.getParam('title'),
      content: this.props.navigation.getParam('content')
    }
  }

  onDelete = id =>{
    this.props.deleteNote(id)
  }

  render() {
    const {title,content,id} = this.state;
    return (
      <View style = {{flex:1,backgroundColor:'white'}} >
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
          placeholder= 'content'
        >
        </TextInput>
        <TouchableOpacity onPress={()=>{this.props.editNote(title,content)
          this.props.navigation.navigate('HomeScreen')}} >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.addNote({title,content})
          this.props.navigation.navigate('HomeScreen')}} >
          <Text>add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:25,
    marginLeft:15
  },
  content:{
    fontSize:20,
    marginLeft:15
  },
});

function mapStateToProps(state) {
  const { content,title,id}=state;
  console.log('edtitle',title);
  console.log('edcontent',content);

  return { content,title,id }
}

export default connect(mapStateToProps,{ editNote,deleteNote,addNote })(EditNote)
