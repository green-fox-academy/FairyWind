//Write a log(timestamp, username, action) function that will create and return a string based on this template:

function log(timestamp, username, action){
  console.log(`INFO - ${timestamp}\n${username} : ${action}`)
}

log('10/22/2019', 'Sherry', 'JSA training');
