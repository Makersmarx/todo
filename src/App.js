import React from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
