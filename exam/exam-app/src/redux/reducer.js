import { SEND_OPTION, DISPLAY_MESSAGE, DISPLAY_VOTES } from './actions';

const initial = {
  message: "No option Selected",
  options: []
}

export const votes = (state = initial, action) => {
  switch (action.type) {
    case DISPLAY_VOTES:
      return {
        options: [action.payload]
      };
    case DISPLAY_MESSAGE:
      return {
        message: `Selected option: ${action.payload}`
      };
    case SEND_OPTION:
      return {
        options: [action.payload]
      };
    default:
      return state;
  }
}