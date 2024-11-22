import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SnackbarProvider } from "notistack";


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#004d40',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#ffffff',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
  },
  
})
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>

      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <CssBaseline>
        <App />
      </CssBaseline>
      </SnackbarProvider>
      
      </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>,
)
