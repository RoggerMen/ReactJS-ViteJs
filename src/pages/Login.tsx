import { Button } from '@mui/material'
import React from 'react'
import { useSnackbar } from 'notistack'

const Login = () => {
    
    const {enqueueSnackbar} = useSnackbar()

    const handleClick = () =>{
        enqueueSnackbar("Notificacion exitosa!",{ variant: "success",
            anchorOrigin: {
                vertical: "top",
                horizontal: "center",
              }
        }
        );
    }

  return (
    <> 
        <h1>Login</h1>
        <Button variant='contained'
        onClick={handleClick}
        >Open en Login</Button>
    </>
  )
}

export default Login