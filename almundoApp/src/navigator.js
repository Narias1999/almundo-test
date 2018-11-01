import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Timeline from './screens/Timeline'
import Splash from './screens/Splash'
import HotelDetail from './screens/HotelDetail'

const RouteConfigs = {
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      title: 'Lista de hoteles'
    }
  },
  HotelDetail: {
    screen: HotelDetail
  }
}

const StackNavigatorConfig = {

}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig)
