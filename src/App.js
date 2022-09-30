// react
import React from 'react';
// router
import { Routes, Route } from 'react-router-dom';

// components and services
import CardList from './components/CardList';
import User from './components/User';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<CardList />} />
                <Route path='/users/:id' element={<User />} />
            </Routes>
        </div>
    );
}

export default App;
