import Box from '@mui/material/Box';

import './App.css'

import ImageMasonry from './masonry/Masonry'
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


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
        <Box className='headerAlign' sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          <Tooltip title="Arte é a expressão de ideias, sentimentos, crenças ou emoções por meio de uma atividade criadora." placement="right">
            <img src={img} alt='Art Icon' id='artIcon' />
          </Tooltip>
        </Box>
        <Box className='headerAlign' sx={{ justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'center', lg: 'center' } }}>
          <Typography id='pageTitle'>Gallery</Typography>
        </Box>
        <Box className='headerAlign' sx={{ justifyContent: 'flex-end' }}>
          <SearchBar setTextInputValue={getInputValue} />
        </Box>
      </Box>
      <ImageMasonry searchValue={textInput} />
    </>
  )
}

export default App
