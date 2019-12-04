export const ADD_TAG = 'add_tag';
export const REMOVE_TAG = 'remove_tag';
export const REMOVE_TAGS = 'remove_tags';

export function addTag(color) {
  return {
    type: ADD_TAG,
    payload: color
  }
}

export function removeTag(color) {
  return {
    type: REMOVE_TAG,
    payload: color
  }
}

export function removeTags() {
  return {
    type: REMOVE_TAGS,
  }
}
