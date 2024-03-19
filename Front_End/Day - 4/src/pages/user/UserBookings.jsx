import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, TableCell, Table, TableBody, TableHead, TableRow, Typography, Select, MenuItem, Rating, Button } from '@mui/material';
import pic1 from '../../assets/images/pic1.jpg'



export default function Events() {   

    const[myBooks, setMyBooks] = useState([]);

    const token = localStorage.getItem('jwtToken');

    const uid = localStorage.getItem("uid");

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    useEffect(() => {
        fetchMyBooks();
    }, []);

    const fetchMyBooks = async () => {
        try {   
            console.log(headers);
            const response = await axios.get(`http://localhost:8080/api/v1/mybook/getAllMyBooks/${uid}`, { headers : headers});
            setMyBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleActionChange = async (e, bookId) => {
        const newAction = e.target.value;
        // Make API call to update the action for the specific book
        try {
            console.log(newAction);
            await axios.put(`http://localhost:8080/api/v1/mybook/updateBookAction/${bookId}/${uid}/${newAction}`, null,{ headers : headers });
            // Assuming the API call is successful, update the state with the updated data

            const updatedBooks = myBooks.map(book => {
                if (book.bid === bookId) {
                    return { ...book, action: newAction };
                }
                return book;
            });
            setMyBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book action:', error);
        }
    };

    const handleRatingChange = async (e, bookId) => {
        const newRating = e.target.value;
        // Make API call to update the action for the specific book
        try {
            console.log(newRating);
            await axios.put(`http://localhost:8080/api/v1/mybook/updateRating/${bookId}/${uid}/${newRating}`, null,{ headers : headers });
            // Assuming the API call is successful, update the state with the updated data

            const updatedBooks = myBooks.map(book => {
                if (book.bid === bookId) {
                    return { ...book, rating: newRating };
                }
                return book;
            });
            setMyBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book rating:', error);
        }
    };

    return (
        <>
            <Box sx={{ mt: '22px', display: 'flex', backgroundColor: 'whitesmoke' }}>
                <Box sx={{ height: '100%', width: '100%' }}>
                    <Box sx={{mt:10, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '600px' }}>
                        <Typography sx={{fontWeight: 600, fontSize: '21px'}}>My Bookings on Starry Ni8's</Typography>
                        <Table sx={{ mt:2, backgroundColor : 'white', tableLayout: "fixed"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No.</TableCell>
                                    <TableCell>Event Cover</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Venue</TableCell>
                                    <TableCell>Status</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        <Box sx={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <Table sx={{ tableLayout: 'fixed' }}>
                                <TableBody>
                                    {/* {myBooks.map((elem, id) => {
                                        const myBook = JSON.parse(elem) */}
                                        {/* return ( */}
                                            <TableRow key={1}>
                                                <TableCell>1</TableCell>
                                                <TableCell>
                                                    <img src={pic1} alt='book-cover' style={{ width : '80px', height: '100px'}} />
                                                </TableCell>
                                                <TableCell>Party</TableCell>
                                                <TableCell>19.03.2024</TableCell>
                                                <TableCell>Le'Meridian</TableCell>
                                                {/* <TableCell>
                                                    <Rating onChange={(e) => handleRatingChange(e, myBook.bid)} defaultValue={myBook.rating} max={5} />
                                                </TableCell> */}
                                                {/* <TableCell>{myBook.review}</TableCell>  */}
                                                <TableCell>
                                                    {/* <Button
                                                        
                                                        // onChange={(e) => handleActionChange(e, myBook.bid)} // handleActionChange should be a function to handle dropdown changes
                                                        // style={{ width: '100%' }}
                                                    >
                                                        Book
                                                        {/* <MenuItem value="">Want to Read</MenuItem>
                                                        <MenuItem value="read">Read</MenuItem>
                                                        <MenuItem value="currentlyReading">Currently Reading</MenuItem> 
                                                    </Button> */}
                                                    <div className='bg-green-700 w-fit'>
                                                        Booked Sucessfully
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        {/* ) */}
                                    {/* }
                                    )} */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
