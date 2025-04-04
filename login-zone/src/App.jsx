import './App.css'
import './assets/styles/styles.css'

import welcome from './assets/images/welcome.png'

import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

import RegisterForm from './components/Register/RegisterForm';
import LoginForm from './components/Login/LoginForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {
        (loggedIn === true) ?
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 3, md: 5, lg: 5, xl: 5 }}
            sx={{ width: '100%', height: '100%' }}>
            <Grid size={{ xs: 1, sm: 2, md: 4 }} />
            <Grid size={{ xs: 1, sm: 1, md: 1 }} id='exitIconGrid'>
              <IconButton aria-label="exit" id='exitIcon' disableRipple >
                <ExitToAppIcon sx={{ color: '#fff', fontSize: '40px' }} />
              </IconButton>
            </Grid>
            <Grid size={{ xs: 0.25, sm: 0.5, md: 1 }} />
            <Grid size={{ xs: 1.5, sm: 2, md: 3 }} id='welcomeImgGrid'>
              <img id='welcomeImg' src={welcome}></img>
            </Grid>
            <Grid size={{ xs: 0.25, sm: 0.5, md: 1 }} />
            <Grid size={{ xs: 2, sm: 3, md: 5 }} />
          </Grid>
          :
          // <LoginForm/>
          <RegisterForm/>
      }
    </>
  )
}

export default App
