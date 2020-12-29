import React, { Component } from 'react'
import './todo-item.css'
import classNames from 'classnames'

export default class TodoItem extends Component {
    constructor() {
        super();
        this.state = {
            hover: false,
        }
        this.falseHover = this.falseHover.bind(this);
        this.trueHover = this.trueHover.bind(this);
    }

    falseHover() {
        this.setState({hover: false})
    }

    trueHover() {
        this.setState({hover: true})
    }

    render() {
        const {item , isActiveItem, delItem} = this.props;
        return (
            <div className="todo-item" onMouseLeave={this.falseHover} onMouseEnter={this.trueHover}>
                <div className="left">
                    <div onClick={isActiveItem} className={classNames("checkbox", {'checkbox-done' : !item.isActive})}></div>
                    <div className={classNames("title", {'item-no-active' : !item.isActive})}>{this.props.item.title}</div>
                </div>
                {this.state.hover ? <div className="right" onClick={delItem}>
                    <div className="btn-del"></div>
                </div>:""}
            </div>
        )
    }
}
