export const DISPLAY_VOTES = 'displayVotes';
export const SEND_OPTION = 'send';
export const DISPLAY_MESSAGE = 'displayMessage';

export function fetchVotes() {
  const url = `http://localhost:8080/api/poll`;
  return (dispatch) => {
    fetch(url, {
      method: "get",
      headers: {
        "Content-type": "application/json"
      },
    })
      .then(response => response.json())
      .then((response) => dispatch(displayVotes(response)))
      .catch(err => console.log(err))
  }
}

export function displayVotes(vote) {
  return {
    type: DISPLAY_VOTES,
    payload: vote
  }
}

export function displayMessage(message) {
  return {
    type: DISPLAY_MESSAGE,
    payload: message
  }
}

export function sendOption(optionId) {
  const url = `http://localhost:8080/api/vote/${optionId}`;
  return (dispatch) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
    })
      .then(response => response.json())
      .then(response => dispatch({
        type: SEND_OPTION,
        payload: response,
      }))
      .catch(err => console.log(err));
  }
}