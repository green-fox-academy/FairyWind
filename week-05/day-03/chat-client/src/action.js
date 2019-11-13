export const DISPLAY_MESSAGE = 'display';
export const SEND_MESSAGE = 'send';
export const RELOAD_MESSAGE = 'reload';

const url = "https://stream-vanadium.glitch.me/messages";

export function displayMessage(message) {
  return {
    type: DISPLAY_MESSAGE,
    payload: message
  }
}

export function sendMessage(input) {
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "user": "Sherry Wu",
        "text": input
      })
    })
      .then(response => response.json())
      .then(response => dispatch({
        type: SEND_MESSAGE,
        payload: response,
      }))
  }
}

export function reloadMessage(message) {
  return (dispatch)=>{
    dispatch(sendMessage(message.text))
  }
}

export function fetchMessage() {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then((response) => dispatch(displayMessage(response)))
  }
}
