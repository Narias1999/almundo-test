import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  hotels: [],
  activeHotel: {}
}

export default createStore(
  reducer,
  initialState
)
