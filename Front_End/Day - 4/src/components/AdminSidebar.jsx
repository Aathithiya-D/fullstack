import React from 'react'
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CelebrationRoundedIcon from '@mui/icons-material/CelebrationRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';

export default function AdminSidePanel(props) {
    
    const navigate = useNavigate();
    
    return (
        <Paper sx={{ flex: '0 0 auto',top:'12%', position: 'static', height: '100vh',position:'fixed', width: '275px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} elevation={3}>
            <List sx={{ mt: 4 }}>
                {/* dashboard */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin/home'>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>

                {/* users */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin/events'>
                        <ListItemIcon>
                            <CelebrationRoundedIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Events' />
                    </ListItemButton>
                </ListItem>

                {/* books */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin/venues'>
                        <ListItemIcon>
                            <GpsFixedRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Venues' />
                    </ListItemButton>
                </ListItem>

                {/* community */}
                <ListItem sx={{ mt: 1 }}>
                    <ListItemButton component={Link} to='/admin/bookings'>
                        <ListItemIcon>
                            <EventAvailableRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Bookings' />
                    </ListItemButton>
                </ListItem>
                
            </List>

            {/* logout */}
            <Link to={'/'}>
            <Button startIcon={<LogoutIcon />} sx={{ width: '100%', mb: 12, textTransform: 'capitalize', letterSpacing: '.15rem', color: 'red' }}>
                Logout
                </Button>
                </Link>    
        </Paper>
    )
}
