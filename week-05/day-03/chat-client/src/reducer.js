import { DISPLAY_MESSAGE, SEND_MESSAGE, RELOAD_MESSAGE } from './action'

const initial = {
  message: [],
  newMessage: []
}

export const message = (state = initial, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        message: action.payload.messages
      };
    case SEND_MESSAGE:
      return {
        ...state,
        message: [action.payload, ...state.message],
        newMessage: action.payload
      };
    case RELOAD_MESSAGE:
      return {
        ...state,
        message: [action.payload, ...state.message],
        newMessage: action.payload
      };
    default:
      return state;
  }
}