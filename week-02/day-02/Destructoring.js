var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

//before ES6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;
console.log(model, color, year, doors, historical);


//from ES6
var {model, color, year, doors, historical} = car;
console.log(model, color, year, doors, historical);

//Above cannot run at the same time
