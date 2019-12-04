import React from 'react';
import UpArrow from './upArrow';
import DownArrow from './downArrow';
import { Link } from 'react-router-dom'

export default function PostStage({ posts, setPosts, getNewPost }) {
  function timeCalculator(startTime) {
    let postTime = Date.now() - startTime;
    let years = Math.floor(postTime / (1000 * 3600 * 24 * 30 * 365))
    let months = Math.floor(postTime / (1000 * 3600 * 24 * 30));
    let days = Math.floor(postTime / (1000 * 3600 * 24));
    let hours = Math.floor(postTime / (1000 * 3600));
    let minutes = Math.floor(postTime / (1000 * 60));
    let seconds = Math.floor(postTime / (1000));
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

  return (
    <main>
      <ul>
        {posts.map((post, index) =>
          <li key={index}>
            <span className="score">
              <UpArrow id={post.id} vote={post.vote} posts={posts} setPosts={setPosts} index={index} getNewPost={getNewPost}></UpArrow>
              <p className="score">{post.score}</p>
              <DownArrow id={post.id} vote={post.vote} posts={posts} setPosts={setPosts} index={index} getNewPost={getNewPost}></DownArrow>
            </span>
            <span className="content">
              <div className="detail">
                <p className="owner">{post.owner}</p>
                <p className="timestamp">{timeCalculator(post.timestamp)}</p>
              </div>
              {post.url === ''
                ? <p className="postTitle">{post.title}</p>
                : <a href={post.url} className="postTitle">{post.title}</a>
              }
              <div className="operate">
                <button>
                  <Link to={`/${post.id}/comment`} className="comment">{post.comments} Comments</Link>
                </button>
                <button>Give Award</button>
                <button>share</button>
                <button>Save</button>
              </div>
            </span>
          </li>
        )}
      </ul>
    </main>
  )
}