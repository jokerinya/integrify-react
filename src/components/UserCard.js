import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { grey, blueGrey } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';

const UserCard = ({ user }) => {
    return (
        <Card elevation={12} sx={{ width: 290 }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: blueGrey['A400'] }}
                        aria-label='recipe'
                    >
                        {user.username.substring(0, 1)}
                    </Avatar>
                }
                title={user.username}
            />
            <CardContent>
                <Typography gutterBottom>{user.name}</Typography>
                <Typography variant='body2' color='text.secondary'>
                    {user.website}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {user.address.city}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end' }}>
                <Button
                    sx={{ color: grey[700] }}
                    component={Link}
                    to={`/users/${user.id}`}
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default UserCard;
