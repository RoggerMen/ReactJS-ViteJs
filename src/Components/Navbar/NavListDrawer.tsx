import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
//import InboxIcon from '@mui/icons-material/Inbox';
//import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react'

interface NavArrayLinks {
    title: string;
    path: string;
    icon: JSX.Element; // Cambiar de string a JSX.Element
}
//React.ElementType; Tipo para componentes React (como `NavLink`)
/*
React.ElementType es un tipo genérico en React que representa cualquier tipo de componente React, ya sea una etiqueta nativa (div, a, etc.) o un componente personalizado como NavLink.
*/
const NavListDrawer : React.FC<{ navArrayLinks: NavArrayLinks[]; NavLink: React.ElementType; setOpen: React.Dispatch<React.SetStateAction<boolean>>; }> = ({ navArrayLinks, NavLink, setOpen}) => {
  return (
    <Box sx={{
        width: 250,
        bgcolor: '#004d40',
        color: '#ffffff'
    }}>
        {/* <nav>
            <List>
                <ListItem>
                    <ListItemIcon>
                    <InboxIcon sx={{ color:"white"}} />
                    </ListItemIcon>
                    <ListItemText primary="INBOX" />
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemIcon>
                    <DraftsIcon sx={{ color:"white"}} />
                    </ListItemIcon>
                    <ListItemText primary="DRAFT" />
                </ListItem>
            </List>
        </nav>
        <Divider sx={{borderColor:"white"}}/> */}
        <nav>
            <List>
                {navArrayLinks.map( (item, index) => (
                    <>
                    <ListItem disablePadding key={item.title}>
                    
                    <ListItemButton component={NavLink}
                    target="_self"
                    rel="noopener noreferrer" to={item.path} 
                    onClick={() => setOpen(false)}> 
                    
                        <ListItemIcon sx={{ color:"white"}}>
                    {item.icon} 
                    </ListItemIcon>
                        <ListItemText>
                            {item.title}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                
                {index < navArrayLinks.length - 1 && <Divider sx={{ borderColor: 'white' }} />}
                </>
                ))}
                
            </List>
        </nav>
    </Box>
  )
}

export default NavListDrawer