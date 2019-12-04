const http = require('http');
const url = require('url');
const HOST = 'localhost';
const PORT = 3000;

const movieData = [
  {
    'id': 1,
    'title': 'The Philosopher\'s Stone',
    'genre': 'fantasy'
  },
  {
    'id': 2,
    'title': 'The Chamber of Secrets',
    'genre': 'mystery'
  },
  {
    'id': 3,
    'title': 'The Prisoner of Azkaban',
    'genre': 'thriller'
  },
  {
    'id': 4,
    'title': 'The Goblet of Fire',
    'genre': 'drama'
  },
  {
    'id': 5,
    'title': 'The Order of the Phoenix',
    'genre': 'mystery'
  },
  {
    'id': 6,
    'title': 'The Half-Blood Prince',
    'genre': 'drama'
  },
  {
    'id': 7,
    'title': 'The Death Hallows',
    'genre': 'fantasy'
  },
]

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url);
  const query = url.parse(req.url, true).query;
  const id = url.parse(req.url).pathname.slice(8);
  switch (reqUrl.pathname) {
    //first case ===============================

    case '/movies':
      //get ==================================
      if (req.method === 'GET') {
        let selectedMovie = [];
        if (query.genre) {
          for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].genre == query.genre) {
              selectedMovie.push(movieData[i]);
            }
          }
        } else {
          selectedMovie = movieData;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(selectedMovie, null, 2));
      }

      //post ==============================
      else if (req.method === 'POST') {
        if (req.headers.authorization === 'top-secret') {
          req.on('data', (chunk) => {
            requestBody = chunk;
          })
          req.on('end', () => {
            if (requestBody.indexOf('title') < 0) {
              res.statusCode = 400;
              res.end('title not given');
            } else {
              for (let i = 0; i < movieData.length; i++) {
                if (requestBody.indexOf(movieData[i].title) > -1) {
                  res.statusCode = 409;
                  res.end('Already exist');
                }
              }
              if (requestBody.indexOf('genre') < 0) {
                requestBody = JSON.parse(requestBody);
                requestBody = { ...requestBody, 'genre': 'unknown' };
              } else {
                requestBody = JSON.parse(requestBody);
              }
              movieData.push(requestBody);
              res.writeHead(201, { 'Content-Type': 'application/json' });
              res.write(JSON.stringify({ movieData }));
              res.end();
            }
          });
        } else {
          res.statusCode = 403;
          res.end('Cannot authorized');
        }
      } else {
        res.statusCode = 405;
        res.end();
      }
      break;

    //second case ====================================
    case `/movies/${id}`:
      let selectedMovie = [];
      //get =======================================
      if (req.method === 'GET') {
        for (let i = 0; i < movieData.length; i++) {
          if (movieData[i].id == id) {
            selectedMovie.push(movieData[i]);
          }
        }
        if (selectedMovie.length > 0) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(selectedMovie, null, 2));
        } else {
          res.statusCode = 404;
          res.end('No such id');
        }
      }

      //delete =======================================
      else if (req.method === 'DELETE') {
        if (req.headers.authorization === 'top-secret') {
          for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].id == id) {
              movieData.splice(i, 1);
              res.statusCode = 204;
              res.end();
            }
          }
          res.statusCode = 404;
          res.end('No such id');
        } else {
          res.statusCode = 403;
          res.end('Cannot authorized');
        }
      }

      //put =============================
      else if (req.method === 'PUT') {
        if (req.headers.authorization === 'top-secret') {
          req.on('data', (chunk) => {
            requestBody = chunk;
          })
          req.on('end', () => {
            if (requestBody.indexOf('title') < 0 || requestBody.indexOf('id') < 0 || requestBody.indexOf('genre') < 0) {
              res.statusCode = 400;
              res.end('request field not given');
            } else if (requestBody.indexOf(id) < 0) {
              res.statusCode = 400;
              res.end('id not same');
            } else {
              for (let i = 0; i < movieData.length; i++) {
                if (requestBody.indexOf(`${movieData[i].id}`) > -1) {
                  requestBody = JSON.parse(requestBody);
                  movieData[i] = requestBody;
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.write(JSON.stringify({ movieData }));
                }
              }
              res.statusCode = 400;
              res.end('no movie with the id');
            }
          });
        } else {
          res.statusCode = 403;
          res.end('Cannot authorized');
        }
      }

      //===================================
      else {
        res.statusCode = 405;
        res.end();
      }
      break;

    //==========================================
    default:
      res.statusCode = 404;
      res.end('failed');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`App is listening on ${HOST}:${PORT}`)
})