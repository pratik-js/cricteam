const router = require('express').Router();
const { dataHelper, mdbHelper } = require('../../common');
var entityName = 'player';

router.post('/player-bulk', (req, res) => {
  const players = req.body.players;
  if (!players) {
    res.send({ inserted: 0 });
  }
  const totalPlayer = players.length;
  const validatedDataList = [];
  for (let i = 0, playerData; i < totalPlayer; i++) {
    playerData = dataHelper.readNewData(entityName, req.body, res);
    playerData && validatedDataList.push(playerData);
  }
  if (validatedDataList.length !== totalPlayer) {
    res.send({ validationError: 'Some data is not valid' });
  }
  mdbHelper.insertMany(entityName, validatedDataList, res);
});

router.post('/player', (req, res) => {
  const data = dataHelper.readNewData(entityName, req.body, res);
  if (!data) {
    res.send({ inserted: 0 });
  }
  mdbHelper.insert(entityName, data, res);
});

router.patch('/player/:id', (req, res) => {
  const patchData = dataHelper.readPatchData(entityName, req, res);
  if (!patchData) {
    res.send({ updated: 0 });
  }
  patchData.updatedAt = new Date().getTime();
  mdbHelper.update(entityName, req.params.id, patchData, res);
});

router.get('/player', (req, res) => {
  let filter, page, limit;
  mdbHelper.list(entityName, { filter, page, limit }, res);
});

router.get('/player/:id', (req, res) => {
  mdbHelper.getById(entityName, req.params.id, res);
});

router.delete('/player/:id', (req, res) => {
  mdbHelper.deleteById(entityName, req.params.id, res);
});

module.exports = router;
