const router = require('express').Router();
var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });

// SET STORAGE
// var storage = multer.diskStorage({
//   destination: function(req, file, next) {
//     console.log(req.body,'----------------------------------------------------------------------------');
//     // next(null, req.body.folderName);
//     next(null, 'upload');
//   },
//   filename: function(req, file, next) {
//     console.log(file.fieldname,'----------------------------------------------------------------------------');
//     // next(null, req.body.fileName);
//     next(null, file.fieldname + '-' + Date.now())
//   }
// });

// var upload = multer({ storage: storage });

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    console.log(file.originalname, '=======');
    cb(null, file.originalname + '-' + Date.now());
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024
  }
});

router.post('/upload', upload.single('avatar'), function(req, res, next) {
  console.log(req.body, '====--===');
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send(req.body);
});

module.exports = router;
