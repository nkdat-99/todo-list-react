import React, { Component } from 'react'
import './todo-list.css'
import TodoItem from './TodoItem/todo-item'

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoItems: [
                {
                    title: 'Angular',
                    isActive: true,
                },
                {
                    title: 'ReactJs',
                    isActive: false,
                },
                {
                    title: 'React Native',
                    isActive: true,
                },
                {
                    title: 'HTML',
                    isActive: true,
                },
                {
                    title: 'NCC Soft',
                    isActive: true,
                },
                {
                    title: 'VueJS',
                    isActive: true,
                },
            ],
            valueItem: "",
            checkAll: false,
            totalItems: 0,
        }
        this.onNewItem = this.onNewItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isActiveAll() {
        return () => {
            const { checkAll, todoItems } = this.state;
            const newList = [...todoItems];
            newList.forEach(e => {
                e.isActive = checkAll;
            });
            this.setState({
                todoItems: newList,
                checkAll: !checkAll,
            });
        };
    }

    isActiveItem(item) {
        return () => {
            const isActive = item.isActive;
            const index = this.state.todoItems.indexOf(item);
            this.setState({
                todoItems: [...this.state.todoItems.slice(0, index),
                {...item, isActive: !isActive }, 
                ...this.state.todoItems.slice(index + 1)]
            });
        };
    }

    onNewItem(event) {
        if (event.key === 'Enter') {
            const text = event.target.value;
            if (!text)  return;
            this.setState({
                todoItems: [
                    ...this.state.todoItems,
                    {title: text, isActive: true }
                ],
                valueItem: "",
            })
        }
    }

    onChange(event) {
        this.setState({
            valueItem: event.target.value,
        })
    }

    allItem(e) {
        return () => {
            this.setState({
                filterItem: e,
            })
        };
    }

    render() {
        const { todoItems, valueItem, filterItem } = this.state;
        const todoActive = todoItems.filter(e => e.isActive === true);
        return (
            <div className="todo">
                <div className="todo-list">
                    <div className="list-header">
                        <div className="check-all" onClick={this.isActiveAll()}></div>
                        <input className="todo-input" placeholder="TodoList" onKeyUp={this.onNewItem} value={valueItem} onChange={this.onChange}/>
                    </div>
                    {todoItems.map((item, index) => 
                        filterItem!==item.isActive && <TodoItem key={index} item={item} onClick={this.isActiveItem(item)}/>
                    )}
                    <div className="list-footer">
                        <div className="total-active">{todoActive.length} items left</div>
                        <button onClick={this.allItem(1)}>All</button>
                        <button onClick={this.allItem(false)}>Active</button>
                        <button onClick={this.allItem(true)}>Completed</button>
                    </div>
                </div>
            </div>
        )
    }
}
