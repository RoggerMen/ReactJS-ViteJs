import {  AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import NavListDrawer from './NavListDrawer'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'

interface NavArrayLinks {
    title: string;
    path: string;
    icon: JSX.Element; // Cambiar de string a JSX.Element
}

const Navbar : React.FC<{navArrayLinks:NavArrayLinks[]}> = ({navArrayLinks}) => {

    const [open, setOpen] = useState(false);

  return (
    <React.Fragment>

    <AppBar position='static'>
        <Toolbar>
            <IconButton color='inherit'
            size='large' onClick={()=> setOpen(true) } 
            sx={{
                display: {xs:"flex", sm:"none"}
            }}
            edge="start">
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' sx={{
                flexGrow:1
            }}>News</Typography>

            <Box sx={{display: {xs: "none", sm:"block"} }}>
            {navArrayLinks.map(item => (
                <Button color='inherit' key={item.title}
                component={NavLink}
                to={item.path}>
                    {item.title}
                </Button>
            ))}
            </Box >
        </Toolbar>
    </AppBar>

    <Drawer open={open}
    anchor='left'
    onClose={()=> setOpen(false)}
    sx={{
        display: {xs:"flex", sm:"none"}
    }}>

        <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
    </Drawer>

    </React.Fragment>
)
        {/**/}
  
}

export default Navbar