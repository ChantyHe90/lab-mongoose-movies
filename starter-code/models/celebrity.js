const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  rating: Number
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;

//const Celebrity in celebrity.js als model
//const celebritySchema in celebrity.js als model
//const celebrities in seeds.js