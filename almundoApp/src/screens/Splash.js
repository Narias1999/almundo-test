import React, { Component } from 'react'
import { View, Image, StatusBar, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import http from './../utils/http'
import { StackActions, NavigationActions } from 'react-navigation'

class Splash extends Component {
  componentDidMount () {
    this.getHotels()
  }

  async getHotels() {
    const result = await http('GET', 'hotel')
    const action = {
      type: 'SET_HOTELS',
      payload: result
    }
    this.props.dispatch(action)
    
    this.redirectToTimeline()

  }
  redirectToTimeline () {
    const resetAction =  StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Timeline' })]
    })
    setTimeout(() => {
      this.props.navigation.dispatch(resetAction)
    }, 2000)
  }
  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image style={styles.imageBackground}
        source={require('./../assets/images/splash.jpg')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: null,
    resizeMode: 'cover'
  },
  container: {
    flex: 1
  }
})

export default connect()(Splash)
