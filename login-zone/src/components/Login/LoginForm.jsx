import { Box, Button, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';

import { useState } from "react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box className='formPageContainer'>
            <Typography variant="h3" component="h1" className="pageTitle" sx={{ fontWeight: '700' }}>LOGIN</Typography>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 3, sm: 5, md: 7, lg: 7, xl: 7 }}
                sx={{ width: '100%', height: '70%'}}>
                <Grid size={{ xs: 'none', sm: 1, md: 2 }}/>
                <Grid size={{ xs: 3, sm: 3, md: 3 }} className='formContainer'>
                    <input type="text" placeholder="User" className="input l" />
                    <Box className="input l" id="alignPasswordInput">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="passwordInput" />
                        {
                            (showPassword) ?
                                <VisibilityOffIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                                :
                                <VisibilityIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                        }
                    </Box>
                    <Button className="formSubmit" variant="contained">Submit</Button>
                </Grid>
                <Grid size={{ xs: 3, sm: 1, md: 2 }} className='alignFormType'>
                    <Button variant="text" className="pageFormName">Login</Button>
                    <Button variant="text" className="pageFormName">Register</Button>
                </Grid>
            </Grid>
        </Box>
    );
}