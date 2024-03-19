import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';


export default function AdminHome() {
    
    // const[userCount, setUserCount] = useState();
    // const[bookCount, setBookCount] = useState();

    // const token = localStorage.getItem('jwtToken');

    // const headers = {
    //     'Authorization': `Bearer ${token}`
    //   };

    // useEffect(() => {
    //     fetchBooksCount();
    //     fetchUsersCount();
    // }, []);

    // const fetchBooksCount = async () => {
    //     try {   
    //         console.log(headers);
    //         const response = await axios.get('http://localhost:8080/api/v1/book/bookCount', { headers : headers});
    //         setBookCount(response.data);
    //     } catch (error) {
    //         console.error('Error fetching books count:', error);
    //     }
    // };

    // const fetchUsersCount = async () => {
    //     try {   
    //         console.log(headers);
    //         const response = await axios.get('http://localhost:8080/api/v1/user/userCount', { headers : headers});
    //         setUserCount(response.data);
    //     } catch (error) {
    //         console.error('Error fetching user count:', error);
    //     }
    

    return (
        
        <Box sx={{ mt: '95px', height: 'calc(100vh - 95px)', display: 'flex', marginLeft: '20%' }} >
            <Box sx={{ m: 5, display: 'flex', gap: 5 }}>
            <Link to='/admin/events'>
                <Card sx={{ maxWidth: 400, height: 180 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Events'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={ 
                                <Typography>{ 10 }</Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='250'
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This Event card is used to show the count of types of events the company manages . It includes all of the relevant information about the types of events managed.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
                
                <Link to='/admin/venues'>
                <Card sx={{ maxWidth: 400, height: 180 }}>
                    <CardActionArea>
                        <CardHeader
                            title='Venues'
                            action={
                                <IconButton>
                                    <EastIcon />
                                </IconButton>
                            }
                            subheader={
                                <Typography>{ 10 }</Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='250'
                            sx={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>
                                This order card is used to manage venues for events. It includes all of the relevant information about different venues.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            </Box>
        </Box>
    )
}
