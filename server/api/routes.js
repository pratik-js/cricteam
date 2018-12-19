const express = require('express');
const player = require('./player');
const team = require('./team');
const uploadPhoto = require('./upload/photo');
const getSchema = require('./getSchema');
const apiRoutes = express.Router();
const rotuer = express.Router();

rotuer.use('/schema', getSchema);
rotuer.use('/api', apiRoutes);

apiRoutes.use(player);
apiRoutes.use(team);
apiRoutes.use(uploadPhoto);

apiRoutes.use(function(req, res, next) {
  var err = new Error('Not Found(:<:<:<:<:<)');
  err.status = 404;
  // next(err);
  return res.send({ route: 404, err });
});

// error handler
apiRoutes.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ route: 500, err });
});

module.exports = rotuer;
