import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default props => {
  const { title, content } = props.note;
  const { onPress } = props;
  return(
    <TouchableOpacity onPress = { onPress }>
      <Text>{ title }</Text>
      <Text>{ content }</Text>
    </TouchableOpacity>
  )
}
