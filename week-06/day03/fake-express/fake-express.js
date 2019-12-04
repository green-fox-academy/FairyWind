const url = require('url');
const http = require('http');

let changeRes = (res) => {
  res.send = (data) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
}

let Server = () => {
  let G = this;
  this.get = {};
  this.post = {};
  this.listen = {};

  let app = (req, res) => {
    let pathName = url.parse(req.url).pathname;
    changeRes(res);
    if (!pathName.endsWith('/')) {
      pathName += '/'
    }
    let method = req.method.toLowerCase();
    if (G[method][pathName]) {
      if (method === 'post') {
        let postBody = '';
        req.on('data', (chunk) => {
          postBody += chunk;
        })
        req.on('end', (err, chunk) => {
          req.body = postBody;
          G[method][pathName](req, res);
        })
      } else {
        G[method][pathName](req = '', res);
      }
    } else {
      res.end('no router');
    }
  }

  app.get = (string, callback) => {
    if (!string.endsWith('/')) {
      string = string + '/';
    }
    if (!string.startsWith('/')) {
      string = '/' + string;
    }
    G.get[string] = callback;
  }

  app.post = (string, callback) => {
    if (!string.endsWith('/')) {
      string = string + '/';
    }
    if (!string.startsWith('/')) {
      string = '/' + string;
    }
    G.post[string] = callback;
  }

  app.listen = (PORT, callback) => {
    const server = http.createServer(callback);
    server.listen(PORT, HOST = 'localhost', callback);
  }

  return app;
}

module.exports = Server();