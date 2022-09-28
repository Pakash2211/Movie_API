const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title : {
    require : true,
    type : String
  },
  rating :{
    require : true,
    type : Number
  },
  genre : {
    type : [String],
    require : true
  },
  language :{
    require : true,
    type : String
  },
  director : {
    require : true,
    type : [String]
  },
  released : {
    require : true,
    type : Number
  }
})

const movieModel = mongoose.model('movie',movieSchema);


module.exports = movieModel;