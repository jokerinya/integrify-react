import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        component={Link}
                        to='/'
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        Integrify Users Application
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
