const mongoose = require('mongoose')

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title can't be blank"]
    },
    description: String,
    done: Boolean,
    dueDate: Date,
    completedDate: Date
});

module.exports = mongoose.model('Todo', todoItemSchema)