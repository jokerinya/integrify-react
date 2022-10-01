// react
import React from 'react';
// router
import { Routes, Route } from 'react-router-dom';
// MUI
/**
 * Exact import provides better performance and bundle size,
 *  resources:
 * https://stackoverflow.com/questions/38171465/modules-import-and-destructuring-performances
 * and
 * https://mui.com/material-ui/guides/minimizing-bundle-size/
 */
import Box from '@mui/material/Box';
// components and services
import UserCardList from './components/UserCardList';
import UserDetails from './components/UserDetails';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Box>
                <Routes>
                    <Route path='/' element={<UserCardList />} />
                    <Route path='/users/:id' element={<UserDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Box>
        </>
    );
}

export default App;
