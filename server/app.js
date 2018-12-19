const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const { initMongoDB } = require('./mongodb/connect');

// const authenticate = require('../middleware/authenticate').authenticate;
const appRoutes = require('./api/routes');

const app = express();
if (process.env.NODE_ENV === 'DEV') {
  app.use(require('morgan')('tiny'));
}
// compress all responses
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// res.header("Access-Control-Allow-Credentials", true);

app.use(function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE,OPTIONS');
  next();
});
app.use(appRoutes);
app.use(express.static(path.resolve('./ui')));
app.use(express.static(path.resolve('./public')));
app.get('*', function(req, res) {
  res.sendFile(path.resolve('./ui/index.html'));
});
const port = process.env.PORT || 3210;
const ip = process.env.IP || 'localhost';

// createFoler('./public');
createFoler('./public/photo');
createFoler('./public/photo/team');
createFoler('./public/photo/player');
function createFoler(folderPath) {
  folderPath = path.resolve(folderPath);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

// mkdirSyncRecursive('public/team');
// function mkdirSyncRecursive(directory) {
//   var path = directory.split('/');
//   for (var i = 0; i < path.length; i++) {
//       var segment = path.slice(0, i).join('/');
//       segment.length > 0 && !fs.existsSync(segment) ? fs.mkdirSync(segment) : null ;
//   }
// };

(async () => {
  await initMongoDB();
  app.listen(port, () => {
    console.info(
      'Express server listening on http://%s:%d, in %s mode',
      ip,
      port,
      process.env.NODE_ENV
    );
  });
})();
