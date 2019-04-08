import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component { 

    render() {
        const { name, important=false } = this.props;
        const style = {
            color : important ? 'steelblue' : 'black',
            fontWeight : important ? 'bold' : 'normal'
        }
        return (
            <div className="itemContainer" style={style}>
                <span>
                    {name}
                </span>
                <button className="itemButton redButton" >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button className="itemButton greenButton">
                    <i className="fa fa-exclamation" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default TodoListItem;