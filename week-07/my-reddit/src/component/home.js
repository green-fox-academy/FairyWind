import React, { useState, useEffect } from 'react';
import PostStage from '../component/postStage';
import SideBar from '../component/sidebar';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const url = 'http://localhost:8080/api/posts';

  function getPosts() {
    fetch(url, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }

  function getNewPost(url, posts, setPosts, index) {
    fetch(url, {
      method: "put",
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        //posts.splice(index, 1, response[0])
        setPosts([...posts, response]);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => getPosts(), [posts.toString()]);
  return (
    <React.Fragment>
      <PostStage posts={posts} setPosts={setPosts} getNewPost={getNewPost}></PostStage>
      <SideBar></SideBar>
    </React.Fragment>
  )
}