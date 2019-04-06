import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/to-do-list';

const el = (
    <div>
        <AppHeader />
        <SearchPanel />
        <TodoList />
    </div>
);

ReactDOM.render(el, document.getElementById('root'));