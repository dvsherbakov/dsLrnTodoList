import React from 'react';
import AppHeader from './app-header';
import SearchPanel from './search-panel';
import TodoList from './to-do-list';

import "./app.css"

const App = () => {
    const items = [
        {id:1, name: "Drink Cofe", important: false},
        {id:2, name: "Create awesome app", important: true},
        {id:3, name: "Learn react", important: false},
];
    return (
        <div className="App appContainer">
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {items} />
        </div>
    );
}

export default App;