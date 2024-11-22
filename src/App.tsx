import React, { useState } from 'react'

import { Box, Container, TextField, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab';


const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`

const initialWeather = {
  city: "",
  country: "",
  temperature: 0,
  condition: "",
  conditionText: "",
  icon: "",
}


function App() {

  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    error:false,
    message:"",
  });
  const [weather, setWeather] = useState(initialWeather);

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit")
    setError({error:false, message: ""});
    setLoading(true)
    try {
      if(!city.trim()) throw {message: "El campo ciudad es obligatorio*"};
      const response = await fetch(`${API_WEATHER}${city}`);
      const data = await response.json();
      if(data.error) throw {message: data.error.message};
      console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });

    } catch (error) {
      console.log(error);
      setWeather(initialWeather);
      setError({error:true, message: (error as {message:string}).message})
    } finally {
      setLoading(false)
    }
  }

  //console.log(import.meta.env.VITE_API_KEY);
  //gutterBottom => es dejar un espacio en la parte inferior
  return (
    <>

    <Container maxWidth="xs"
    sx={{
      mt: 2
    }}> 
      <Typography
      variant='h3'
      component="h1"
      align='center'
      gutterBottom
      >
        Weather App
      </Typography>
      {error.error && (
        <Typography color="error" sx={{m:1.5}}>
          {error.message}
        </Typography>
      )}

      <Box
      sx={{
        display:"grid", gap:2
      }}
      component="form"
      autoComplete='off'
      onSubmit={onSubmit}
      >
        <TextField 
        id='city'
        label="Ciudad"
        variant='outlined'
        size='small'
        required
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        error={error.error}
        helperText={error.message}
        />

        <LoadingButton
        type='submit'
        variant='contained'
        loading={loading}
        loadingIndicator="Cargando..."
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city &&
      <Box sx={{
        mt:2,
        display:"grid",
        gap:2,
        textAlign:"center"
      }}
      >
        <Typography variant='h4'>
          {weather.city} {weather.country}
        </Typography>
        <Typography variant='h5'>
          {weather.temperature}°C
        </Typography>
        <Box> 
        <img src={weather.icon} alt={weather.conditionText}  />
        </Box>
        <Typography variant='h6'>
          {weather.conditionText}
        </Typography>
      </Box> 
}
      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>

    </Container>
    
    </>
  )
}

export default App
