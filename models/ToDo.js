const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const toDoSchema = new mongoose.Schema({
  items: {
    type: Array,
  }
});

module.exports = mongoose.model('todolist', toDoSchema);
