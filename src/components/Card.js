import React from 'react';
import { Link } from 'react-router-dom';

import CardComponent from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';

const Card = ({ user }) => {
    return (
        <CardComponent elevation={12} sx={{ width: 290 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[500] }} aria-label='recipe'>
                        {user.name.substring(0, 1)}
                    </Avatar>
                }
                title={user.name}
                subheader={user.email}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {user.username}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {user.address.city}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={`/users/${user.id}`}>
                    Details
                </Button>
            </CardActions>
        </CardComponent>
    );
};

export default Card;
