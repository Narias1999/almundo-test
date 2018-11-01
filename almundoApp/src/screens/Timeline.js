import React, { Component } from 'react'
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import SearchBar from './../components/SearchBar'
import Card from './../components/Card'

class Timeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hotels: []
    }
  }

  componentDidMount() {
    this.setState({
      hotels: this.props.hotels
    })
  }
  filterHotels = (text) => {
    const hotels = this.props.hotels.filter(hotel => {
      const hotelName = hotel.name.toLowerCase()
      return hotelName.search(text.toLowerCase()) !== -1
    })
    this.setState({
      hotels
    })
  }

  cardPressed = (hotel) => {
    const action = {
      type: 'SET_ACTIVE_HOTEL',
      payload: hotel
    }
    this.props.dispatch(action)
    this.props.navigation.navigate('HotelDetail', { title: hotel.name })
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='rgba(0,0,0, .3)'/>
        <SearchBar onChange={this.filterHotels} />
        <View style={styles.scrollViewContainer}>
          <ScrollView>
            {
              this.state.hotels.map(
                hotel => <Card cardPressed={this.cardPressed} hotel={hotel} key={hotel._id} /> 
              )
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1
  },
  container: {
    flex: 1
  }
})

const mapStateToProps = (state, props) => ({
  ...props,
  hotels: state.hotels
})

export default connect(mapStateToProps)(Timeline)
