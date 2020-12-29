import './App.css';
import TodoList from './component/TodoList/todo-list';
import User from './component/User/user';
import Home from './component/Home/home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/todolist">TodoList</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </div>
        <div className="body">
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/todolist">
              <TodoList></TodoList>
            </Route>
            <Route path="/user">
              <User></User>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
