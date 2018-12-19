const path = require('path');
const router = require('express').Router();
const multer = require('multer');
const { dataHelper, mdbHelper } = require('../../common');

const storage = multer.diskStorage({
  destination: function(req, file, next) {
    const uploadPath = path.resolve(
      './public/photo/' + file.originalname.split('|s|')[0] + '/'
    );
    next(null, uploadPath);
  },
  filename: function(req, file, next) {
    const fileName = file.originalname.split('|s|')[1];
    next(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function(req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'));
    }
    callback(null, true);
  },
  limits: {
    fileSize: 2 * 1024 * 1024
  }
});

router.post('/upload', upload.single('avatar'), async function(req, res, next) {
  const reqData = JSON.parse(req.body.saveMeta);
  if (!(reqData.fileName && reqData.entityName && reqData.id)) {
    res.send({ updated: 0 });
  }
  const patchData = {
    photoUrl: '/photo/' + reqData.entityName + '/' + reqData.fileName
  };
  patchData.updatedAt = new Date().getTime();
  const updateCount = await mdbHelper.update(
    reqData.entityName,
    reqData.id,
    patchData
  );
  if (updateCount === 1) res.send({ done: true });
});

module.exports = router;
