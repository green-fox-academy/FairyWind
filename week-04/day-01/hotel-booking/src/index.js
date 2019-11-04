import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter';
import data from './data'

export default function List(props) {
  const innerStyle = {
    border: "1px solid black",
    height: "200px"
  }

  const imgStyle = {
    maxWidth: "150px",
    maxheight: "150px",
    float: "left",
    margin:"0 5px"
  }
  const style = {
    display: "flex",
    flexFlow: "column",
    width: "100%"
  }
  const headlineStyle = {
    margin: "5px 0 10px 5px"
  }

  let hotelList = data.hotels.map(element => {
    return (
      <div style={innerStyle}>
        <h3 style={headlineStyle}>{element.name}</h3>
        <img src={element.imageURL} alt={element.name} style={imgStyle}></img>
        <p>{element.description}</p>
        <button>Book Now!</button>
      </div>
    )
  })

  return (
    <React.Fragment>
      <h2 style={headlineStyle}>Hotel List</h2>
      <div style={style}>
        {hotelList}
      </div>
    </React.Fragment >
  )
}

ReactDOM.render(<List />, document.querySelector('.main'));




