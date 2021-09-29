const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
	airport: String,
	arrival: Date,
  }, {
	timestamps: true
  });


const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destination: [destinationSchema],

})

module.exports = mongoose.model('Flight', flightSchema);