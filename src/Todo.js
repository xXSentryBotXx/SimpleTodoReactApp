import React, {Component} from 'react';

class Todo extends Component {
  render () {
    return (
      <li>
        <input type="checkbox"/>
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
