import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList.css';
import TodoListItem from './TodoListItem'
import TodoForm from './TodoForm'

function TodoList() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  const addTodo = (item) => {
    axios.post("/api/todos", item)
    .then(res => {
      setTodos([...todos, res.data]);
    })
    .catch(console.error);
  };

  const editTodo = (text,{id}) => {
    let editTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.title = text;
      }
      return todo;
    });
    setTodos(editTodos);

    axios.patch("/api/todos/" + id, {title:text})
      .catch(err => {
        console.error(err);
        getTodos();
      })
  };

  const handleDelete = (id) => {
    const itemIndex = todos.findIndex(item => item._id === id)
    todos.splice(itemIndex, 1)
    axios.delete('/api/todos/' + id)
      .then(() => {
        setTodos([...todos]);
      }).catch(console.error);

  }

  const handleDone = (id) => {
    const item = todos.find((item) => item._id === id);
    item.done = !item.done;
    setTodos([...todos])
    item.completedDate = (item.done) ? new Date() : null
    axios.patch('/api/todos/' + id, { done: item.done, completedDate: item.completedDate })
      .catch(err => {
        console.error(err);
        getTodos();
      });
  }

  return (
    <div>
      <h2>Todos</h2>
      <hr />
      <TodoForm onSubmit={addTodo} />
      
      <ul className="todolist-items">
        {todos.map((todo) => {
          return (<TodoListItem
            key={todo._id}
            todo={todo}
            editTodo={editTodo}
            onDelete={handleDelete}
            onDone={handleDone} />)
        })}
      </ul>
    </div>
  )
}

export default TodoList;