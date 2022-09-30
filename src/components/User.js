import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usersService from '../services/users';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function getUser() {
            const user = await usersService.getUser(id);
            setUser(user);
        }
        getUser();
    }, [id]);

    console.log(user);

    return <div>User</div>;
};

export default User;
