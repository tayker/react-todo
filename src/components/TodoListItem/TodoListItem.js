import React, { Component } from 'react';

import './TodoListItem.css';

export default class TodoListItem extends Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false
        };
    }

    render(){
        
        const { label, onDeleted, 
                onToggleImportant, 
                onToggleDone, 
                important, 
                done } = this.props;
        let classNames = 'todo-list-item d-flex justify-content-between';
        if( done ) {
            classNames += ' done';
        };
        if( important ) {
            classNames += ' important'
        }

        return (
            <div className={ classNames }>
                <span
                    className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    { label }
                </span>
                <div className="btns-wrapper">
                    <button type="button"
                            className="btn btn-outline-success btn-small"
                            onClick={ onToggleImportant }>
                        <i className="fa fa-exclamation" />
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-small"
                            onClick={ onDeleted } >
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </div>
        )
    }
};