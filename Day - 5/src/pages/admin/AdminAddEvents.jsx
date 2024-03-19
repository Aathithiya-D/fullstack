import React, { useState } from 'react'
import {Box, Button, IconButton, TextField, Tooltip} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';


export default function AddEvents({ setOpen }) {

    const [book, setBook] = useState({})

    const addNewBook = async () => {
        console.log(book)

        const token = localStorage.getItem('jwtToken');

        const headers = {
            'Authorization': `Bearer ${token}`
        };
        
        try {
            await axios.post('http://localhost:8080/api/v1/book/createBook', book, { headers : headers});
            setOpen(false)
            window.location.reload()
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    return (
        <Box sx={{ width: '500px', height: '350px', backgroundColor: 'whitesmoke' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title='close'>
                    <IconButton sx={{ '&:hover': { color: 'red' } }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ pr: 3, pl: 3 }}>
                <Box>
                    {/* <TextField onChange={(e) => setId(e.target.value)} size='small' type='number' id='book-id' label='Book ID' name='invoice-id' autoFocus required /> */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <TextField onChange={(e) => setBook({... book, bookname: e.target.value})} size='small' id='Bookname' label='Name' name='Bookname' required />
                        <TextField onChange={(e) => setBook({...book, authorname: e.target.value})} size='small' id='Authorname' label='Type' name='Authorname' required />
                    </Box>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <TextField sx={{ mt: 3 }} onChange={(e) => setBook({...book, dop: e.target.value})} size='small' id='dop' label='dop' name='dop' required />
                        <TextField sx={{ mt: 3 }} onChange={(e) => setBook({...book, genre: e.target.value})} size='small' id='genre' label='genre' name='genre' required />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        {/* <TextField sx={{ mt: 3 }} onChange={(e) => setBook({...book, book_url1: e.target.value})} size='small' id='Book_Url' label='Book_Url' name='Book_Url' required /> 
                        <TextField sx={{ mt: 3 }} onChange={(e) => setBook({...book, book_img_url: e.target.value})} size='small' id='Book_Url' label='Book_Url' name='Book_Url' required />
                    </Box> */}
                </Box>
                {/* <Autocomplete
                    id='products-autocomplete'
                    size='small'
                    options={options}
                    getOptionLabel={option => option}
                    sx={{ mt: 3 }}
                    onChange={(e, value) => {
                        if (value !== null) {
                            setBook({...book, genre: value})
                        }
                    }}
                    renderInput={ params => (
                        <TextField { ...params } size='small' id='products' label='Genre' name='products' required />
                    )}
                /> */}

                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        onClick={addNewBook}
                        color='error'
                        variant='outlined'
                    >Add</Button>
                </Box>
            </Box>
        </Box>
    )
}
