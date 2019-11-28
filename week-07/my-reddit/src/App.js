import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';

import redditLogo from './image/reddit.png';
import userLogo from './image/user.jpg';
import logo from './image/logo.png';
import Home from './component/home';
import SubmitPost from './component/submitPost';
import Login from './component/login';
import SignIn from './component/signIn';
import Header from './component/header';
import Comment from './component/comment';


function App() {
  const user = window.localStorage.getItem('user');
  const [name, setName] = useState(user);
  return (
    <div className="container">
      <div className="head">
        <span className="linkCombine">
          <img src={redditLogo} alt="logo" className="icon"></img>
          <NavLink to="/" className="link">reddit</NavLink>
        </span>
        <span className="linkCombine">
          <img src={logo} alt="logo" className="icon"></img>
          <NavLink to="/" className="link">r/marvel</NavLink>
        </span>
        <span className="linkCombine">
          <img src={userLogo} alt="logo" className="icon"></img>
          <div className="dropdown">
            <button className="dropButton">{name}</button>
            <div className="dropContent">
              <p><NavLink to="/login">log in</NavLink></p>
              <p onClick={() => {
                window.localStorage.clear();
                setName('user');
                window.location.reload();
              }}>log out</p>
            </div>
          </div>
        </span>
      </div>
      <Header></Header>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/submit" render={() => <SubmitPost />} />
      <Route exact path="/login" render={() => <Login setName={setName}/>} />
      <Route exact path="/signin" render={() => <SignIn setName={setName}/>} />
      <Route exact path="/:id/comment" render={({match}) => <Comment pid={match.params.id}/>} />
    </div>
  );
}

export default App;
