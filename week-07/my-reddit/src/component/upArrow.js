import React from 'react';

let voted = false;
function handleChange(id, posts, setPosts, index, getNewPost) {
  if (voted) {
    const url = `http://localhost:8080/api/posts/${id}/downvote`;
    voted = false;
    getNewPost(url, posts, setPosts, index);
  } else {
    const url = `http://localhost:8080/api/posts/${id}/upvote`;
    voted = true;
    getNewPost(url, posts, setPosts, index);
  }
}

export default function UpArrow({ id, vote, posts, setPosts, index, getNewPost }) {
  return (
    <button
      className={(vote === 1) ? "upvoted" : "upvote"}
      onClick={() => handleChange(id, posts, setPosts, index, getNewPost)}>
    </button >
  )
}