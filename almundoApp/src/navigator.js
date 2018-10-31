import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Timeline from './screens/Timeline'
import Splash from './screens/Splash'
import HotelDetail from './screens/HotelDetail'

const RouteConfigs = {
    Splash: {
        screen: Splash
    },
    Timeline: {
        screen: Timeline
    },
    HotelDetail: {
        screen: HotelDetail
    },
}

const StackNavigatorConfig = {

}

export default createStackNavigator(RouteConfigs, StackNavigatorConfig)
