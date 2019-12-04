import React from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';
import ironMan from '../image/ironman.jpg'
import captainAmerican from '../image/captainamerican.jpg'
import thor from '../image/thor.jpg'
import spiderMan from '../image/spiderman.jpg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="tag">
        <p className="sideTitle">COMUNITY DETAILS</p>
        <span className="sideName">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="about">r/Marvel</h1>
        </span>
        <p className="description"> This is a subreddit dedicated to Marvel Comics, its publications and hundreds of characters. It is not a affiliated with Marvel Entertainment, LLC and us an unofficial community operate by dedicated fans. </p>
        <button className="submit">
          {
            window.localStorage.getItem('user') === null
              ? <Link to="/login">PLEASE LOG IN</Link>
              : <Link to="/submit">SUBMIT A NEW POST</Link>
          }
        </button>
      </div>
      <img className="img" src={ironMan} alt="iron man"></img>
      <img className="img" src={captainAmerican} alt="captain american"></img>
      <img className="img" src={thor} alt="thor"></img>
      <img className="img" src={spiderMan} alt="spider man"></img>
    </div>
  )
}