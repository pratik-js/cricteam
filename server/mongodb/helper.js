const { ObjectID } = require('mongodb');
const { getCollection } = require('./connect');

const mdbHelper = {
  list: async (
    collectionName,
    { filter = {}, page = 0, limit = 10, sort = 'name' },
    res = null
  ) => {
    const collection = getCollection(collectionName);
    const sortField = {};
    sortField[sort] = 1;
    try {
      const dbRes = await collection
        .find(filter)
        .sort(sortField)
        .toArray();
      sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  },
  insert: async (collectionName, data, res = null) => {
    const collection = getCollection(collectionName);
    try {
      // Insert a single document
      const dbRes = await collection.insertOne(data);
      sendResponse(res, { inserted: dbRes.insertedCount });
    } catch (err) {
      console.error(err.stack);
    }
  },
  insertMany: async (collectionName, dataList, res = null) => {
    const collection = getCollection(collectionName);
    try {
      // Insert multiple documents
      const dbRes = await collection.insertMany(dataList); // [{ a: 2 }, { a: 3 }]
      sendResponse(res, { inserted: dbRes.insertedCount });
    } catch (err) {
      console.error(err.stack);
    }
  },
  update: async (collectionName, id, patchData, res = null) => {
    const collection = getCollection(collectionName);
    try {
      const dbRes = await collection.updateOne(
        { _id: get_id(id) },
        { $set: patchData }
      ); // {a:1}, {$set: {b: 1}}
      sendResponse(res, { updated: dbRes.modifiedCount });
      return dbRes.modifiedCount;
    } catch (err) {
      console.error(err.stack);
    }
  },
  getById: async (collectionName, id, res = null) => {
    try {
      const collection = getCollection(collectionName);
      const dbRes = await collection.findOne({ _id: get_id(id) });
      sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  },
  deleteById: async (collectionName, id, res = null) => {
    const collection = getCollection(collectionName);
    try {
      const dbRes = await collection.deleteOne({ _id: get_id(id) });
      sendResponse(res, { deleted: dbRes.deletedCount });
      // sendResponse(res, dbRes);
    } catch (err) {
      console.error(err.stack);
    }
  },
  getCounter: async counterName => {
    const counterDetail = {};
    counterDetail[counterName] = 1;
    try {
      const collection = getCollection('counter');
      const dbRes = await collection.findOneAndUpdate(
        {},
        {
          $inc: counterDetail
        },
        { upsert: true, returnOriginal: false }
      );
      return dbRes.value[counterName];
    } catch (err) {
      console.error(err.stack);
    }
  },
  getGroupby: async (collectionName, res = null) => {
    try {
      const collection = getCollection(collectionName);
      const dbRes = await collection.aggregate([
        { $group: { "_id": "$teamId", averageQuantity: { $sum: "$point" } } }
      ]);
      console.log(dbRes);
      sendResponse(res, { dbRes });
    } catch (err) {
      res.send({ a: err.stack });
      // console.error(err.stack);
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
