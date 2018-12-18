const router = require('express').Router();
const { dataHelper, mdbHelper } = require('../../common');
var entityName = 'team';

router.post('/team', async (req, res) => {
  const data = dataHelper.readNewData(entityName, req.body, res);
  if (!data) {
    res.send({ inserted: 0 });
  }
  data.teamId = await mdbHelper.getCounter(entityName);
  mdbHelper.insert(entityName, data, res);
});

router.patch('/team/:id', (req, res) => {
  const patchData = dataHelper.readPatchData(entityName, req, res);
  if (!patchData) {
    res.send({ updated: 0 });
  }
  patchData.updatedAt = new Date().getTime();
  mdbHelper.update(entityName, req.params.id, patchData, res);
});

router.get('/team', (req, res) => {
  let filter, page, limit;
  mdbHelper.list(entityName, { filter, page, limit }, res);
});

router.get('/team/:id', (req, res) => {
  mdbHelper.getById(entityName, req.params.id, res);
});

router.delete('/team/:id', (req, res) => {
  mdbHelper.deleteById(entityName, req.params.id, res);
});

module.exports = router;
