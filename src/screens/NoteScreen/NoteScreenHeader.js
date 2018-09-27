import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default NoteScreenHeader = props => {
  const { onBackButtonPress } = props;
  return(
    <View style = { styles.container }>
      <TouchableOpacity onPress = { onBackButtonPress }>
        <Icon name = 'arrow-back' size = { 25 } />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name = 'delete' size = { 25 } />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
