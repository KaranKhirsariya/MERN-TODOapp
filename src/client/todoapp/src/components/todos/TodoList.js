import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList.css';
import TodoListItem from './TodoListItem'

function TodoList() {
  
  const [todos, setTodos] = useState([])
  const [todoItem, setTodoItem] = useState("");

  const addItem = async event => {
    event.preventDefault();
    const item = {
      title: todoItem,
      description: null,
      createdDate: new Date(),
      completedDate: null,
      dueDate: null,
      done: false
    }

    axios.post("/api/todos", item)
      .then(res => {
        console.log(res);
        setTodos([...todos, res.data]);
      })
      .catch((err) => { 
        console.error(err) 
      });

    setTodoItem("");
  };

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

  const handleDelete = (e, id) => {
    const itemIndex = todos.findIndex(item => item._id === id)
    todos.splice(itemIndex, 1)
    axios.delete('/api/todos/' + id)
      .then(() => {
        setTodos([...todos]);
      }).catch(err => {
        console.error(err);
      })

  }

  const handleDone = (e, id) => {
    const item = todos.find((item) => item._id === id);
    item.done = !item.done;
    item.completedDate = (item.done) ? new Date() : null
    axios.patch('/api/todos/' + id, { done: item.done, completedDate: item.completedDate })
      .then(res => {
        setTodos([...todos]);
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <h2>Todos</h2>
      <hr />
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={todoItem}
            onChange={e => setTodoItem(e.target.value)}
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todolist-items">
        {todos.map((todo) => {
          return (<TodoListItem key={todo._id} data={todo} onDelete={handleDelete} onDone={handleDone} />)
        })}
      </ul>
    </div>
  )
}

export default TodoList;