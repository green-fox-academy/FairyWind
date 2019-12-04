'use strict';

let container = document.createElement('div');
document.body.appendChild(container);

let food = document.createElement('ul');
let foodArr = ['bread', 'milk', 'orange', 'tomato'];
for (let i = 0; i < foodArr.length; i++) {
  let newFood = document.createElement('li');
  newFood.textContent = foodArr[i];
  food.appendChild(newFood);
  if (i === 0) {
    newFood.style.background = 'lightGray';
    newFood.style.width = '99px';
  }
}
food.style.listStyle = 'none';
food.style.border = '1px solid black';
food.style.width = '60px';
food.style.padding = '0 40px 0 0';
food.style.margin = '10px';
container.appendChild(food);

let operation = document.createElement('div');
let operationArr = ['Up', '>', 'X', 'Down'];
for (let i = 0; i < operationArr.length; i++) {
  let newOperation = document.createElement('button');
  newOperation.textContent = operationArr[i];
  operation.appendChild(newOperation);
}
operation.style.display = 'flex';
operation.style.flexDirection = 'column';
operation.style.width = '100px';
operation.style.margin = '10px';
container.appendChild(operation);

let choice = document.createElement('ul');
choice.style.border = '1px solid black';
choice.style.width = '60px';
choice.style.padding = '0 40px 0 0';
choice.style.margin = '10px';
container.appendChild(choice);

container.style.display = 'flex';
container.style.flexDirection = 'row';