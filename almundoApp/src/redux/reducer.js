function rootReducer (state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case 'SET_HOTELS':
      return {
        ...state,
        hotels: payload
      }
    case 'SET_ACTIVE_HOTEL':
      return {
        ...state,
        activeHotel: payload
      }
    default: return state
  }
}

export default rootReducer
