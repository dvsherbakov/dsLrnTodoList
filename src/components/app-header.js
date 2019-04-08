import React from 'react';

const AppHeader = () => {
    return (
        <div>
            <i className="fa fa-coffee" aria-hidden="true"></i>
            <i className="fa fa-snowflake-o" aria-hidden="true"></i>
            <a className="btn btn-default" href="path/to/settings" aria-label="Settings">
            </a>
            <h1>My Todo List</h1>
        </div>
    );
}

export default AppHeader;