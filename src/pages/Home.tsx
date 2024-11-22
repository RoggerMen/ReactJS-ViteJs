import { Alert, AlertTitle, Box, Button, Collapse, Snackbar } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import React, { useState } from "react";

const Home = () => {

    const [open, setOpen] = useState(false);

  return (
    <>

      <h1>Home</h1>
      
    {/* para utilizar notistack DEBEMOS INSTALARLO CON COMANDO "npm install notistack"
    IMPORTAMOS CON import { SnackbarProvider } from "notistack"; */}

      <Box sx={{ display: "grid", gap: "1rem" }}>

      <Alert
          severity="error"
        >
            <AlertTitle>Error</AlertTitle>
            Esta es una alerta Esta es una alerta
        </Alert>
        <Button variant="contained" onClick={()=>{setOpen(true)}}>Open</Button>

        <Snackbar open={open} message="Alerta Snackbar" 
            autoHideDuration={1000} // Tiempo antes de que desaparezca automáticamente
            anchorOrigin={{ vertical: "top", horizontal: "center" }} // Posición flotante
            onClose={() =>{setOpen(false)}} >
        <Alert
          severity="error"
          action={<Button color="inherit"> Delete </Button>}
        >
          <AlertTitle>Error</AlertTitle>
          Esta es una alerta Esta es una alerta
        </Alert>
        </Snackbar>
        
        
        <Alert
          severity="warning"
          action={
            <>
              <Button color="inherit"> Update </Button>
              <Button color="inherit"> Delete </Button>
            </>
          }
        >
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info" 
        icon={<AddReactionIcon />}
        variant="filled">This is an info alert — check it out!</Alert>

        <Collapse in={open}>
          <Alert severity="success" 
          onClose={() =>{setOpen(false)}}>
            This is a success alert — check it out!
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};

export default Home;
