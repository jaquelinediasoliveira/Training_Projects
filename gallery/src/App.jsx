import Box from '@mui/material/Box';

import './App.css'

import ImageMasonry from './masonry/Masonry'
import { Typography } from '@mui/material';


import img from './assets/photo.png'
import SearchBar from './searchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [textInput, setTextInput] = useState('');

  const getInputValue = (i) => {
    setTextInput(i)
  }

  return (
    <>
      <Box id='headerContainer' component="section">
        <Box className='headerAlign'>
          <img src={img} alt='Art Icon' id='artIcon' />
        </Box>
        <Box className='headerAlign' sx={{ justifyContent: 'center' }}>
          <Typography id='pageTitle'>Gallery</Typography>
        </Box>
        <Box className='headerAlign' sx={{ justifyContent: 'flex-end'}}>
          <SearchBar setTextInputValue={getInputValue}/>
        </Box>
      </Box>
      <ImageMasonry searchValue={textInput}/>
    </>
  )
}

export default App
