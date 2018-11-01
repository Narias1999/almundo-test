import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native'
import Swiper from './../components/ImageSwiper'
import StarIndicator from './../components/StarIndicator'
import { preloadImage, yellowStars, white } from './../utils/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'

class HotelDetail extends Component {

  static navigationOptions = {
    headerTransparent: true,
    headerTintColor: white,
    headerStyle: {
      paddingTop: 25,
    }
  }

  render () {
    console.log(this.props)
    const { images, name, stars, price, description, country } = this.props.hotel

    return (
      <ScrollView style={styles.container}>
        <StatusBar translucent={true} backgroundColor="rgba(0,0,0,.3)" />
        <Swiper images={images} />
        <View style={styles.description}>
          <View style={styles.nameAndStars}>
            <Text style={styles.title}>{name}</Text>
            <StarIndicator stars={stars} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.note}>Percio por noche</Text>
            <Text style={styles.price}>{price} USD</Text>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.countryContainer}>
            <Icon name='map-marker' size={20} style={styles.markerIcon} />
            <Text style={styles.countryName}>{country}</Text>
          </View>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white
  },
  countryName: {
    fontSize: 17,
    fontWeight: 'bold'
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
  },
  second: {
    paddingHorizontal: 10
  },
  markerIcon: {
    marginRight: 8
  },
  countryContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'justify',
    color: preloadImage,
    marginVertical: 10
  }
})

const mapStateToProps = (state, props) => ({
    ...props,
    hotel: state.activeHotel
})

export default connect(mapStateToProps)(HotelDetail)
