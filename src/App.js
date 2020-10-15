import React from 'react';
import TodoItem from './components/TodoItem';
import './styles.css';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
  }

  render() {
    const list = this.state.todos.map((item) => {
      return <TodoItem key={item.id} item={item} />;
    });

    return (
      <div className="todo-list">
        <h1>Lets Get Organized</h1>
        {list}
      </div>
    );
  }
}

export default App;
