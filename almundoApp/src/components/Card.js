import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { white, preloadImage, yellowStars } from './../utils/colors'
import Icon from 'react-native-vector-icons'
import StarIndicator from './StarIndicator'

function card({ hotel, cardPressed }) {

  const imageSource = { uri: hotel.images[0]}
  
  return (
    <TouchableOpacity onPress={() => cardPressed(hotel)}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.description}>
          <View style={styles.nameAndStars}>
            <Text style={styles.title}>{hotel.name}</Text>
            <StarIndicator stars={hotel.stars} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.note}>Percio por noche</Text>
            <Text style={styles.price}>{hotel.price} USD</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: white,
    marginBottom: 10,
    borderRadius: 3,
    shadowColor: "#000",
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    backgroundColor: preloadImage,
    height: 180
  },
  description: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  priceContainer: {
    justifyContent: 'flex-end'
  },
  note: {
    fontSize: 13,
    color: preloadImage,
    marginBottom: 5,
    lineHeight: 18
  },
  price: {
    fontSize: 18,
    color: yellowStars
  }
})

export default card
