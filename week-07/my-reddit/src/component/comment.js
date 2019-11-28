import React, { useState, useEffect } from 'react';
import UpArrow from './upArrow';
import DownArrow from './downArrow';
import AddComment from './addComment'

export default function Comment({ pid }) {
  const [comments, setComments] = useState([]);
  function timeCalculator(startTime) {
    let commentTime = Date.now() - startTime;
    let years = Math.floor(commentTime / (1000 * 3600 * 24 * 30 * 365))
    let months = Math.floor(commentTime / (1000 * 3600 * 24 * 30));
    let days = Math.floor(commentTime / (1000 * 3600 * 24));
    let hours = Math.floor(commentTime / (1000 * 3600));
    let minutes = Math.floor(commentTime / (1000 * 60));
    let seconds = Math.floor(commentTime / (1000));
    if (years > 1) {
      return `${years} years ago`;
    } else if (years === 1) {
      return `${years} year ago`;
    } else if (months > 1) {
      return `${months} months ago`;
    } else if (months === 1) {
      return `${months} month ago`;
    } else if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return `${days} day ago`;
    } else if (hours > 1) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return `${hours} hour ago`;
    } else if (minutes > 1) {
      return `${minutes} minutes ago`;
    } else if (minutes === 1) {
      return `${minutes} minute ago`;
    } else if (seconds > 1) {
      return `${seconds} seconds ago`;
    } else if (seconds === 1) {
      return `${seconds} second ago`;
    }
  }

  const url = `http://localhost:8080/api/posts/${pid}/comments`;

  function getComments() {
    fetch(url, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(err => console.log(err));
  }

  useEffect(() => getComments(), [comments.toString()]);

  return (
    <main>
      <AddComment></AddComment>
      <ul>
        {comments.map((comment, index) =>
          <li key={index}>
            <span className="score">
              <p className="score">{comment.cscore}</p>
            </span>
            <span className="content">
              <div  className="detail">
                <p className="owner">{comment.username}</p>
                <p className="timestamp">{timeCalculator(comment.timestamp)}</p>
              </div>
              <p className="commentTitle">{comment.content}</p>
            </span>
          </li>
        )}
      </ul>
    </main>
  )
}