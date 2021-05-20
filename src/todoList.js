import React from 'react'; 
import ReactDOM from 'react-dom';
import { Component } from "react";
import './list.css';

const List=()=>{
    class TodoTitle extends React.Component {
        render () {
        return <h1>CGU Todo list</h1>;
        }
    }

    class TodoAddForm extends React.Component {
        todoRef = React.createRef();
    
        addItemOnList = e => {
        e.preventDefault();
        const todoItem = {
            todo: this.todoRef.current.value,
            isCompleted: false
        };
        this.props.addToDoItems(todoItem);
        e.currentTarget.reset();
        };
    
        render() {
        return (
            <form id="todoList-form" onSubmit={this.addItemOnList}>
            <input type="text" name="todosTxtbx" ref={this.todoRef} required />
            <button>+</button>
            </form>
        );
        }
    }

    class TodoList extends React.Component {
        handleChange = event => {
        const updateTodo = {
            ...this.props.todoItems,
            [event.currentTarget.name]: event.currentTarget.value
        };
        console.log(event.currentTarget.value);
        this.props.updateTodos(this.props.index, updateTodo);
        };
    
        toggleCheckbox = event => {
        const updateTodo = {
            ...this.props.todoItems,
            [event.currentTarget.name]: event.currentTarget.checked
        };
        
        this.props.updateTodos(this.props.index, updateTodo);
        };
    
        render() {
        return (
            <li className={this.props.todoItems.isCompleted ? "done" : null}>
            <input
                type="checkbox"
                name="isCompleted"
                checked={this.props.todoItems.isCompleted}
                onChange={this.toggleCheckbox}
                // checked={this.props.todoItems.isChecked}
            />
            <input
                type="text"
                name="todo"
                value={this.props.todoItems.todo}
                onChange={this.handleChange}
            />
            {/* <button>Edit</button> */}
            <button
                className="del-btn"
                onClick={() => this.props.removeToDoItem(this.props.index)}
            >
                x
            </button>
            </li>
        );
        }
    }

    var ToDoItems = [];
    class TodoApp extends Component {
    state = {
        todoItems: {}
    };

    addToDoItems = item => {
        const items = { ...this.state.todoItems };
        console.log(items);
        items[`item${Date.now()}`] = item;
        this.setState({
        todoItems: items
        });
    };

    removeToDoItem = item => {
        const todos = { ...this.state.todoItems };
        delete todos[item];
        this.setState({ todoItems: todos });
    };

    updateTodos = (key, updatedTodo) => {
        const todos = { ...this.state.todoItems };
        todos[key] = updatedTodo;
        this.setState({ todoItems: todos });
    };

    render() {
        return (
        <div className="main">
            <TodoTitle/>
            <TodoAddForm addToDoItems={this.addToDoItems} />
            <ul>
            {Object.keys(this.state.todoItems).map(key => (
                <TodoList
                key={key}
                index={key}
                todoItems={this.state.todoItems[key]}
                removeToDoItem={this.removeToDoItem}
                updateTodos={this.updateTodos}
                />
            ))}
            </ul>
        </div>
        );
    }
    }

    ReactDOM.render(<TodoApp initItems={ToDoItems}/>, document.getElementById('root'));
}

export default List;