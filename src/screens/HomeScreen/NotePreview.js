import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default props => {
  const { title, content } = props.note;
  const { onPress } = props;
  return(
    <TouchableOpacity onPress = { onPress }>
      <View style = { styles.container } elevation = { 5 }>
        <Text style = { styles.title }>{ title }</Text>
        <Text style = { styles.content }>
          {
            content.length < 50 ?
            content :
            content.slice(0, 50) + '...'
          }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 2,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
  content: {
    color: 'grey'
  }
})
