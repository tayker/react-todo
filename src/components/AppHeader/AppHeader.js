import React from 'react';

import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
    return (
        <div className="app-header d-inline-flex">
            <h1>Todo List</h1>
            <div className="task-info">
                { toDo } more todo, { done } done
            </div>
        </div>  
    )
};

export default AppHeader;