import React from 'react';

let voted = false;
function handleChange(id, posts, setPosts, index, getNewPost) {
  if (voted) {
    const url = `http://localhost:8080/api/posts/${id}/upvote`;
    voted = false;
    getNewPost(url, posts, setPosts, index, getNewPost);
  } else {
    const url = `http://localhost:8080/api/posts/${id}/downvote`;
    voted = true;
    getNewPost(url, posts, setPosts, index, getNewPost);
  }
}

export default function DownArrow({ id, vote, posts, setPosts, index, getNewPost }) {
  return (
    <button
      className={(vote === -1) ? "downvoted" : "downvote"}
      onClick={() => handleChange(id, posts, setPosts, index, getNewPost)}>
    </button >
  )
}