import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'

export default function Filter(props) {
  const filterStyle = {
    border: "1px solid black",
    display: "flex",
    flexFlow: "column",
    width: "120px",
    margin: "50px 10px"
  }
  const headlineStyle = {
    margin: "5px 0 10px 5px"
  }

  let starFilter = data.filters["Star rating"].map(element => {
    if (element.checked) {
      return (
        <label><input type="checkbox" key={element.name} defaultChecked></input>{element.name}</label>
      )
    } else {
      return <label><input type="checkbox" key={element.name}></input>{element.name}</label>
    }
  })

  let typeFilter = data.filters["Property type"].map(element => {
    return (
      <label><input type="checkbox" key={element.name}></input>{element.name}</label>
    )
  })

  return (
    <React.Fragment>
      <div style={filterStyle}>
        <h5 style={headlineStyle}>Star rating</h5>
        {starFilter}
      </div>
      <div style={filterStyle}>
        <h5 style={headlineStyle}>Property type</h5>
        {typeFilter}
      </div>
    </React.Fragment >
  )
}

ReactDOM.render(<Filter />, document.querySelector('.filter'));