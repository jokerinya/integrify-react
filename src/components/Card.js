import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    border: 'red 1px solid',
    borderRadius: '10px',
    margin: '20px',
    padding: '10px',
};

const Card = ({ user }) => {
    const handleClick = () => {
        console.log(user.id);
    };
    return (
        <div style={style}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <button onClick={handleClick}>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
            </button>
        </div>
    );
};

export default Card;
