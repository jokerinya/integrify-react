// react
import React from 'react';
// router
import { Routes, Route } from 'react-router-dom';
// MUI
/**
 * This type of import provides better performance and bundle size,
 *  resources:
 * https://stackoverflow.com/questions/38171465/modules-import-and-destructuring-performances
 * and
 * https://mui.com/material-ui/guides/minimizing-bundle-size/
 */
import Box from '@mui/material/Box';
// components and services
import CardList from './components/CardList';
import User from './components/User';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Box>
                <Routes>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/' element={<CardList />} />
                    <Route path='/users/:id' element={<User />} />
                </Routes>
            </Box>
        </>
    );
}

export default App;
