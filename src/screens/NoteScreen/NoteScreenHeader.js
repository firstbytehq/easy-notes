import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default NoteScreenHeader = props => {
  const { onBackButtonPress, onDeleteButtonPress } = props;
  return(
    <View style = { styles.container }>
      <TouchableOpacity onPress = { onBackButtonPress }>
        <Icon name = 'arrow-back' size = { 25 } />
      </TouchableOpacity>
      <TouchableOpacity onPress = { onDeleteButtonPress }>
        <Icon name = 'delete' size = { 25 } />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
