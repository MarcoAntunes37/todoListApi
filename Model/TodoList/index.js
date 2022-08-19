const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoListSchema = new Schema({
  title:  String, 
  description: String,
  done: {type: Boolean, default: false},
  date: Date,
  startTime: String,
  endTime: String,
});

const todoList = mongoose.model("todoList", todoListSchema)

module.exports = todoList