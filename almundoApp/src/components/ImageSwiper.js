import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { preloadImage } from './../utils/colors'

function  imageSwiper ({ images }) {
  console.log(images)
  return (
    <Swiper style={styles.swiper}>
      {
        images.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri }} />
          </View>
        ))
      }
    </Swiper>
  )
}

const styles = StyleSheet.create({
  swiper: {
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: preloadImage,
    resizeMode: 'cover'
  }
})

export default imageSwiper
