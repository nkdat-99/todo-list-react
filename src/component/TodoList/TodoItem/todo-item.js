import React, { Component } from 'react'
import './todo-item.css'
import classNames from 'classnames'

export default class TodoItem extends Component {
    render() {
        const {item , onClick} = this.props;
        return (
            <div onClick={onClick} className={classNames("todo-item", {'item-no-active' : !item.isActive})}>
                <div className={classNames("checkbox", {'checkbox-done' : !item.isActive})}></div>
                <div className="title">{this.props.item.title}</div>
            </div>
        )
    }
}
