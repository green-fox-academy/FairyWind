const fs = require('fs');
const mysql = require('mysql');
const csv = require('fast-csv');

let stream = fs.createReadStream('./user_data.csv');
let myData = [];
let csvStream = csv
  .parse()
  .on('data', function (data) {
    myData.push(data);
  })
  .on('end', function () {
    myData.shift();

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'week06'
    });

    let queryString = `INSERT INTO user_data VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    myData.map((user, index) => {
      connection.query(queryString, user, (error, response) => {
        console.log(error);
      })
    });
  });

stream.pipe(csvStream);