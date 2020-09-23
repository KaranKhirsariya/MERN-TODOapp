const express = require ('express'); 
const router = express.Router(); 
const Todo = require('../models/todo'); 

router.get('/todos', function(req, res) { 
  Todo.find(function(err, todolist) {
    res.json(todolist);
  });
});

router.get('/todos/:id', function(req, res) {  
  Todo.findById(req.params.id, function(err, todoItem) {
    if (!todoItem) {
      res.status(404).send('No result found');
    } else {
      res.json(todoItem);
    }
  });
});

router.post('/todos', function(req, res) {     
  let todoItem = new Todo(req.body);
  todoItem.save()
    .then(item => {
      res.send(item);
    })
    .catch(function(err) {
      res.status(422).send('Todo item add failed');
    });
});

router.patch('/todos/:id', function(req, res){    
  Todo.findByIdAndUpdate(req.params.id, req.body,{new:true})
    .then(function(response) {
      res.json(response);
    })
    .catch(function(err) {
      res.status(422).send("Todo item update failed.");
    });
});

router.delete('/todos/:id', function(req, res) {  
  Todo.findById(req.params.id, function(err, todoItem) {
    if (!todoItem) {
      res.status(404).send('Todo item not found');
    } else {
      Todo.findByIdAndRemove(req.params.id)
        .then(function() { res.status(200).json("Todo item deleted") })
        .catch(function(err) {
          res.status(400).send("Todo item delete failed.");
        })
    }
  });
})

module.exports = router; 