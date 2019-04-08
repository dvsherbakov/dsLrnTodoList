import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {
    constructor() {
        super();

        this.onLabelClick = () => {
            this.setState(
                {
                    done: true
                }
            );
        }

        this.state = {
            done: false
        }
    }

    render() {
        const { name, important = false } = this.props;
        const { done } = this.state;
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