import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Backdrop, Box, Button, TableCell, Table, TableBody, TableHead, TableRow } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AddEvents from './AdminAddEvents';
import AddVenues from './AdminAddVenues';

export default function Books() {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false)
    const [books, setBooks] = useState([]);
    // const [selectedBook, setSelectedBook] = useState({
    //     id: '',
    //     title: '',
    //     author: '',
    //     dop: ''
    // });

    const token = localStorage.getItem('jwtToken');

    const headers = {
        'Authorization': `Bearer ${token}`
      };

    useEffect(() => {
        fetchBooks();
    }, []); // Fetch books on component mount

    const fetchBooks = async () => {
        try {   
            console.log(headers);
            const response = await axios.get('http://localhost:8080/api/v1/book/getAllBooks', { headers : headers});
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const addBook = async (book) => {
        try {
            await axios.post('http://localhost:8080/api/v1/book/createBook', book, { headers : headers});
            setOpen(false);
            fetchBooks();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    // const updateBook = async () => {
    //     try {
    //         await axios.put(`http://localhost:8080/api/v1/book/updateBook/${selectedBook.id}`, selectedBook, { headers : headers});
    //         setOpen(false);
    //         fetchBooks();
    //     } catch (error) {
    //         console.error('Error updating book:', error);
    //     }
    // };

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/book/deleteBook/${id}`, { headers : headers});
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <>
            <Box sx={{ mt: '90px', height: 'calc(100vh - 95px)', display: 'flex', backgroundColor: 'whitesmoke', marginLeft:'18%' }}>
                

            {/*<Box sx={{ height: '100%', width: 'calc(100% - 325px)' }}>
                    <Button
                        onClick={() => setOpen(true)}
                        sx={{ mt: 5, ml: 4 }}
                        color='primary'
                        variant='contained'
                        startIcon={<LibraryBooksOutlinedIcon />}
                    >
                        Add Books
                    </Button>

                    <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={open}>
                        <AddBooks
                            show={open}
                            setOpen={setOpen}
                        />

                    </Backdrop>

                    <Box sx={{ mt: 8, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '700px' }}>
                        <Table sx={{ backgroundColor : 'white'}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Book ID</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Date of Publication</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((book) => (
                                    <TableRow key={book.bid}>
                                        <TableCell>{book.bid}</TableCell>
                                        <TableCell>{book.bookname}</TableCell>
                                        <TableCell>{book.authorname}</TableCell>
                                        <TableCell>{book.dop}</TableCell>
                                        <TableCell>
                                            
                                            <button onClick={() => deleteBook(book.bid)} style={{ borderRadius: 5, backgroundColor: 'red', padding: 3, color: 'white' }}>Delete</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
            </Box> */}
            <Box sx={{ height: '100%', width: '100%', fontSize:'35px' }}>
                <span className='ml-6'>Bookings List</span>
                {/* <Button
                    onClick={() => setOpen(true)}
                    sx={{ mt: 2, ml: 4 }}
                    color='primary'
                    variant='contained'
                    startIcon={<LibraryBooksOutlinedIcon />}
                >
                    Add Venues
                </Button>

                <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={open}>
                    <AddVenues
                        show={open}
                        setOpen={setOpen}
                    />

                </Backdrop> */} 

                <Box sx={{ display: 'flex', backgroundColor: 'whitesmoke' }}>
                    <Box sx={{ height: '100%', width: '100%' }}>
                        <Box sx={{mt:2, ml: 3, mr: 3, overflowY: 'hidden', maxHeight: '600px' }}>
                            <Table sx={{ mt:2, backgroundColor : 'white', tableLayout: "fixed"}}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.No.</TableCell>
                                        {/* <TableCell>Book Cover</TableCell> */}
                                        <TableCell>Name</TableCell>
                                        <TableCell>Event</TableCell>
                                        <TableCell>Venue</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                            <Box sx={{ maxHeight: '500px', overflowY: 'auto' }}>
                                <Table sx={{ tableLayout: 'fixed' }}>
                                    <TableBody>
                                    {/* {books.map((book) => ( */}
                                        <TableRow key={1}>
                                            <TableCell>1</TableCell>
                                            {/* <TableCell>
                                               <img style={{ width: '120px', height: '150px'}}src={book.book_img_url} alt={book.bookname} />
                                            </TableCell> */}
                                            <TableCell>Aathi</TableCell>
                                            <TableCell>Meeting</TableCell>
                                            <TableCell>Red Fort</TableCell>
                                            <TableCell>19.03.2024</TableCell>
                                            <TableCell>
                                                
                                                <button onClick={() => deleteBook(book.bid)} style={{ borderRadius: 5, backgroundColor: 'red', padding: 3, color: 'white' }}>Delete</button>
                                            </TableCell>
                                        </TableRow>
                                    {/* )} */}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}

