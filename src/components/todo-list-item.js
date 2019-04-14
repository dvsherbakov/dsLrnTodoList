import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        }
    }

    onLabelClick = () => {
        this.setState((state) => {
            return { done: !state.done }
        });
    }

    onMarkImportant = () => {
        this.setState((state) => {
            return {important: !state.important}
        });
    }

    render() {
        const { name, onDeleted } = this.props;
        const { done, important } = this.state;
        let classNames = 'normalSpan';
        if (done) classNames += ' doneSpan';
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <div className="itemContainer" style={style}>
                <span
                    style={style}
                    className={classNames}
                    onClick={this.onLabelClick} >
                    {name}
                </span>
                <button 
                    type="button" 
                    className="btn itemButton redButton" 
                    onClick={onDeleted}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger itemButton greenButton" 
                    onClick={this.onMarkImportant}>
                    <i className="fa fa-exclamation" aria-hidden="true" ></i>
                </button>
            </div>
        )
    }
}

export default TodoListItem;