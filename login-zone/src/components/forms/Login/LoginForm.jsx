import { Box, Button, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';

import { useState } from "react";

import './Login.css'

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box id='formPageContainer'>
            <Typography variant="h2" component="h1" sx={{ color: '#3B4C61', userSelect: 'none' }}>LOGIN</Typography>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 5, md: 7, lg: 7, xl: 7 }}
                sx={{ width: '100%', height: '70%', backgroundColor: 'green' }}>
                <Grid size={{ xs: 'none', sm: 1, md: 2 }} sx={{ backgroundColor: 'orange' }} />
                <Grid size={{ xs: 2, sm: 3, md: 3 }} id='formContainer'>
                    <input type="text" placeholder="User" className="input" />
                    <Box className="input" id="alignPasswordInput">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" id="passwordInput" />
                        {
                            (showPassword) ?
                                <VisibilityOffIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                                :
                                <VisibilityIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                        }
                    </Box>
                    <Button id="formSubmit" variant="contained">Submit</Button>
                </Grid>
                <Grid size={{ xs: 1, sm: 1, md: 2 }} sx={{ backgroundColor: 'yellow' }} id='alignFormType'>
                    <Button variant="text" className="pageFormName">Login</Button>
                    <Button variant="text" className="pageFormName">Register</Button>
                </Grid>
            </Grid>
        </Box>
    );
}