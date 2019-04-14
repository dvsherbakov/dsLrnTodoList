import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemmAddForm extends Component {
    render() {
        return(
            <div className = 'item-add-form input-group mb-3'>
                <input type="text" className="form-control" placeholder="Type new item content" aria-describedby="basic-addon2" />
                <button className = "btn btn-outline-secondary">Add Item</button>
            </div>
        )
    }
}