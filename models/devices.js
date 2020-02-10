const mongoose = require('mongoose');
require('./measures');

mongoose.connect('mongodb://localhost:27017/SmartHomeDataBase');

const {ObjectId} = mongoose.Schema.Types;

const deviceSchema_ = new mongoose.Schema({
    name: String,
    brand: String,
    ecology: String,
    measureList: [{type: ObjectId, ref: 'Measure'}]
});

const Device_ = mongoose.model('Device', deviceSchema_);

/**
 @param device - Object - {name, brand, ecology}
 */
const createDevice = device => {
    const doc = new Device_(device);
    return doc.save();
};

const getTheDevice = deviceId => Device_.findById(deviceId).populate('measureList').exec();

module.exports = {createDevice};