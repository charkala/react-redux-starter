import {
  INFO_SUCCESS, INFO_ERROR,
} from '../types'

const initialState = {
  info: null,
  error: null,
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFO_SUCCESS:
      return {
        ...state,
        info: action.payload,
      }
    case INFO_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default mainReducer