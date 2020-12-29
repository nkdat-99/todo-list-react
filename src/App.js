import './App.css';
import TodoList from './component/TodoList/todo-list'

function App() {
  return (
    <div className="App">
      <div className="menu">
      </div>
      <div className="body">
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
