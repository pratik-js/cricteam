const { ObjectID } = require('mongodb');
const { getCollection } = require('./connect');

const mdbHelper = {
  list: async (collectionName, { filter = {}, page = 0, limit = 10 }, res) => {
    const collection = getCollection(collectionName);
    try {
      const dbRes = await collection
        .find(filter)
        .limit(limit)
        .toArray();

      sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  },
  insert: async (collectionName, data, res) => {
    const collection = getCollection(collectionName);
    try {
      // Insert a single document
      const dbRes = await collection.insertOne(data);
      sendResponse(res, { inserted: dbRes.insertedCount });
    } catch (err) {
      console.error(err.stack);
    }
  },
  insertMany: async (collectionName, dataList, res) => {
    const collection = getCollection(collectionName);
    try {
      // Insert multiple documents
      const dbRes = await collection.insertMany(dataList); // [{ a: 2 }, { a: 3 }]
      sendResponse(res, { inserted: dbRes.insertedCount });
    } catch (err) {
      console.error(err.stack);
    }
  },
  update: async (collectionName, id, patchData, res) => {
    const collection = getCollection(collectionName);
    try {
      const dbRes = await collection.updateOne(
        { _id: get_id(id) },
        { $set: patchData }
      ); // {a:1}, {$set: {b: 1}}
      sendResponse(res, { updated: dbRes.modifiedCount });
    } catch (err) {
      console.error(err.stack);
    }
  },
  getById: async (collectionName, id, res) => {
    try {
      const collection = getCollection(collectionName);
      const dbRes = await collection.findOne({ _id: get_id(id) });
      sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  },
  deleteById: async (collectionName, id, res) => {
    const collection = getCollection(collectionName);
    try {
      const dbRes = await collection.deleteOne({ _id: get_id(id) });
      sendResponse(res, { deleted: dbRes.deletedCount });
      // sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  }
};

function validateMdbId(id) {
  if (id && ObjectID.isValid(id)) {
    return id;
  }
}

function sendResponse(res, resData) {
  if (res) {
    res.send(resData || { done: true });
  }
}

function get_id(id) {
  if (validateMdbId(id)) {
    return new ObjectID(id);
  }
}

module.exports = { validateMdbId, mdbHelper };
