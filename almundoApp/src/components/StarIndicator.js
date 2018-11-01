import React from 'react'
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { yellowStars, preloadImage } from './../utils/colors'

const Star = ({ color }) => <Icon name='star' color={color} size={18} style={styles.icon} />

function StarIndicator({ stars }) {
  return (
    <View style={styles.container}>
      {
        [...Array(stars)].map((x, i) =>
          <Star key={i} color={yellowStars} />
        )
      }
      {
        [...Array(5 - stars)].map(
          (x, i) => <Star key={i} color={preloadImage} />
        )
      }
    </View>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 5
  }
})

export default StarIndicator
