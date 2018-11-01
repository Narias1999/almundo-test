import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function searchBar({ onChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <Icon name='search' size={22} />
        <TextInput onChangeText={onChange} placeholder="Buscar..." style={styles.input} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputCont: {
    height: 40,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  }
})

export default searchBar
