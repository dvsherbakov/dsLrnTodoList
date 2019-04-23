import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './to-do-list';
import ItemAddForm from './item-add-form';
import SvgRect from './svg-rect';
import "./app.css";

class App extends React.Component {
    itemCounter =105;
    constructor() {
        super();

        this.state = {
            todoData: [
                { id: 101, name: "Drink Cofe", important: false },
                { id: 102, name: "Create awesome app", important: true },
                { id: 103, name: "Learn react", important: false },
            ]
        };
    }
    newItem = (text) =>
    {
        this.itemCounter += 1;
        return { id: this.itemCounter, name: text, important: false }
    }
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newData
            };
        });
    }
    addItem = (text) => {
        console.log(`Added item: ${text}`)
        this.setState(({ todoData }) => {
            const newData = [
                ...todoData,
                this.newItem(text)
            ]

            return {
                todoData: newData
            };
        });
    }
    render() {
        return (
            <div className="App appContainer" >
                <AppHeader />
                <SearchPanel />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />
                <ItemAddForm onItemAdd={this.addItem} />
                <SvgRect />
            </div>
        );
    }
}

export default App;