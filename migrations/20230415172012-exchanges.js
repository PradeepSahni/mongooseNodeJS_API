'use strict';

module.exports = {
  up: async (models, mongoose) => {
    /*
      refer to mongoose docs on how to alter a model's schema
    */
      // { name: String, age: { type: Number, min: 0 } }
      // return mongoose.collection('users').updateMany({}, { $rename: { name: "fullName" } })
      return models.collection('exchanges').updateOne({exchange_id:'HKH'}, {$set: {blacklisted: true}});
  },

  down: (models, mongoose) => {
    /*
      undoing schema alteration
    */
      return models.collection('exchanges').updateOne({exchange_id:'HKH'}, {$set: {blacklisted: true}});
  }
};
