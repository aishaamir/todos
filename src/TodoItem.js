import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#ddd',
            padding: '5px',
            border: 'dotted #444 1px',
            textDecoration: this.props.todo.isDone ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                {title}
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    color: 'red',
    cursor: 'pointer',
    float: 'right',
    backgroundColor: 'none',
    border: 'none',
    fontWeight: 'bolder'

}

export default TodoItem
