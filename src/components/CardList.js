import React, { useState, useEffect } from 'react';
import usersService from '../services/users';

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
        <div>
            {users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </div>
    );
};

export default CardList;
