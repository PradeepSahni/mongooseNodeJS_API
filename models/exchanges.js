'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    exchange_id: {
      type: String
    },
    url: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    versionKey: false
  });
  const exchanges = mongoose.model('exchanges', newSchema);
  return exchanges;
};