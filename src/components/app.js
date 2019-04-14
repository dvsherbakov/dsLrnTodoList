import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './to-do-list';

import "./app.css"

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            todoData: [
                { id: 101, name: "Drink Cofe", important: false },
                { id: 102, name: "Create awesome app", important: true },
                { id: 103, name: "Learn react", important: false },
            ]
        }
    }
    deleteItem = (id) => {
        console.log(id);
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            
            const newData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
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
                    todos={ this.state.todoData }
                    onDeleted={ this.deleteItem } />
            </div>
        );
    }
}

export default App;