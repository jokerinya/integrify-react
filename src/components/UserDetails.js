import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

import usersService from '../services/users';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [like, setLike] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLikeClick = () => {
        setLike(!like);
    };

    useEffect(() => {
        async function getUser() {
            const user = await usersService.getUser(id);
            setUser(user);
        }
        getUser();
    }, [id]);

    if (!user) return null;

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 3,
                }}
            >
                <Card sx={{ maxWidth: 425 }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                sx={{ bgcolor: blue[700] }}
                                aria-label='username'
                            >
                                {user.username.substring(0, 1)}
                            </Avatar>
                        }
                        title={user.name}
                        subheader={user.username}
                    />
                    <CardContent>
                        <Typography color='text.secondary'>
                            Email: {user.email}
                        </Typography>
                        <Typography color='text.secondary'>
                            Address: {user.address.street}, {user.address.suite}
                            , {user.address.city}, {user.address.zipcode}
                        </Typography>
                        <Typography color='text.secondary'>
                            Phone: {user.phone}
                        </Typography>
                        <Typography color='text.secondary'>
                            Website: {user.website}
                        </Typography>
                        <Typography color='text.secondary'>
                            Company: {user.company.name}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label='add to favorites'
                            onClick={handleLikeClick}
                        >
                            <FavoriteIcon sx={{ color: like && red[700] }} />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label='show more'
                        >
                            <Tooltip title='Show More'>
                                <ExpandMoreIcon />
                            </Tooltip>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <Typography paragraph textAlign={'center'}>
                                Company Details:
                            </Typography>
                            <Typography paragraph>Catch Phrase:</Typography>
                            <Stack direction='column' spacing={1} mb={2}>
                                <Chip
                                    label={user.company.catchPhrase}
                                    variant='outlined'
                                />
                                <Typography paragraph>BS:</Typography>
                                <Chip
                                    label={user.company.bs}
                                    variant='filled'
                                />
                            </Stack>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
        </Container>
    );
};

export default UserDetails;
