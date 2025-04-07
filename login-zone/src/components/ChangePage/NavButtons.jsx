import { Box, Button } from "@mui/material";

import '../../assets/styles/styles.css'

export default function NavButtons({pageName}){

    const selectPage = (e) =>{
        pageName(e.target.value)
    }

    return(
        <Box className='alignFormType'>
             <Button variant="text" className="pageFormName" value='login' onClick={selectPage}>Login</Button>
             <Button variant="text" className="pageFormName" value='register' onClick={selectPage}>Register</Button>
        </Box>
    );
}