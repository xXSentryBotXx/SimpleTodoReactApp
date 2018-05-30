import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div className="Todo-List">
        <ul>
          <Todo text="Feed Cat"/>
          <Todo text="Do random things"/>
          <Todo text="Profit"/>
        </ul>
      </div>
    )
  }
}

export default TodoList;
