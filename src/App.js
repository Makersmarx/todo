import React from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';
import todosData from './todosData';

function App() {
  const list = todosData.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });

  return (
    <div className="todo-list">
      <h1>Lets Get Organized</h1>
      {list}
    </div>
  );
}

export default App;
