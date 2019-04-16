import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemmAddForm extends Component {

    state = { label: "" }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.label);
        this.props.onItemAdd(this.state.label);
        this.setState({ label: "" });
    }

    onChange = (e) => {
        this.setState({ label: e.target.value });
    }

    render() {
        const { label } = this.state;
        return (
            <form onSubmit={this.submit}>
                <div className='item-add-form input-group mb-3'>
                    <input type="text"
                        className="form-control" 
                        placeholder="Type new item content"
                        aria-describedby="basic-addon2"
                        onChange={this.onChange}
                        value={label} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}