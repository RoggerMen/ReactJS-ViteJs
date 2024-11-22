import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {

    const validateEmail = (email:string) => {
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return re.test(email);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setError({error:true, message: "Ingrese un email válido"});
            console.log("Email Incorrecto")
        } else {
            setError({error:false, message: "Email Válido"});
            console.log("Email Correcto")
        }
        /* TAMBIEN PUEDES HACERLO ASI
        if (validateEmail(email)) {
            setError({error:false, message: "Email Válido"});
            console.log("Email Correcto")
        } else {
            setError({error:true, message: "Email inválido"});
            console.log("Email Incorrecto")
        }
        */
        
    } 

    const [email, setEmail] = useState("");
    const [error, setError] = useState({error:false,
      message: "",  
    });

  return (
    <> 
    <h1>Register</h1>

    <Box component="form" onSubmit={handleSubmit}>

    <TextField sx={{ mb:5}}
    id='email'
    label='Email'
    type='email'
    variant='outlined'
    fullWidth
    error={error.error}
    helperText={error.message}
    value={email}
    required
    onChange={(e) => setEmail(e.target.value)}
    >

    </TextField>

    <Button
    type='submit'
    variant='outlined'
    sx={{ mt:2 }}
    > Registrarme</Button>

    </Box>
    </>
  )
}

export default Register