export const SHOW_IMAGE = 'show_image';
export const START_FETCH = 'start_fetch';
export const END_FETCH = 'end_fetch';

const url = "https://jsonplaceholder.typicode.com/photos";

export function startFetch() {
  return {
    type: START_FETCH
  }
}

export function showImage(imageList) {
  return {
    type: SHOW_IMAGE,
    payload: imageList
  }
}

export function endFetch() {
  return {
    type: END_FETCH
  }
}

export function fetchImage() {
  return (dispatch) => {
    dispatch(startFetch());
    fetch(url)
      .then(response => response.json())
      .then((response) => dispatch(showImage(response)))
      .then(() => dispatch(endFetch()))
  }
}