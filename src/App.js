import React from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
  return (
    <div className="todo-list">
      <h1>Lets Get Organized</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
