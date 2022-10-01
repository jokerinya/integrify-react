import React, { useState, useEffect } from 'react';
import usersService from '../services/users';

import Grid from '@mui/material/Grid';

import Card from './Card';

const CardList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // Define function
        async function fecthUsers() {
            const users = await usersService.getAll();
            setUsers(users);
        }
        // call it
        fecthUsers();
        // we want it to render only one time
    }, []);

    return (
        <Grid container padding={3} rowSpacing={2}>
            {users.map((user) => (
                <Grid
                    key={user.id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Card user={user} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
