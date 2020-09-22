import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Calender from './components/pages/Calender';
import NavigationAvatar from './components/NavigationAvatar/NavigationAvatar'
import TodoList from './components/todos/TodoList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Todos</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/calender">Calender</NavLink></li>
          
        </ul>
        <div className="align-right"><NavigationAvatar name='Karan Khirsariya' email='karan.khirsariya@gmail.com'/></div>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route exact path="/calender" component={Calender} />
    </Switch>
  );
}
export default App;
