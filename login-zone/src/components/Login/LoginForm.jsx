import { Box, Button, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from "react";

import NavButtons from "../ChangePage/NavButtons";

export default function LoginForm({ setConfirmed, selectedPage, usersList }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const validUser = usersList.find((userItem) =>
            userItem.username === username && userItem.password === password
        );

        if (validUser) {
            setConfirmed(true)
            setErrorMessage('');
        } else{
            setErrorMessage('* Incorrect username or password');
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <Box className='formPageContainer'>
            <Typography variant="h3" component="h1" className="pageTitle" sx={{ fontWeight: '700' }}>LOGIN</Typography>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 3, sm: 5, md: 7, lg: 7, xl: 7 }}
                sx={{ width: '100%', height: '70%' }}>
                <Grid size={{ xs: 'none', sm: 1, md: 2 }} />
                <Grid size={{ xs: 3, sm: 3, md: 3 }} className='formContainer'>
                    <form onSubmit={handleLogin} className="form">
                        <input required type="text" placeholder="Username" className="input l" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
                        <Box className="input l" id="alignPasswordInput">
                            <input required type={showPassword ? "text" : "password"} placeholder="Password" className="passwordInput" value={password}
                                onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                            {
                                (showPassword) ?
                                    <VisibilityOffIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                                    :
                                    <VisibilityIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                            }
                        </Box>
                        {errorMessage && <Typography color="error" sx={{ marginBottom: 2 }}>{errorMessage}</Typography>}
                        <Button className="formSubmit" variant="contained" type="submit">Submit</Button>
                    </form>
                </Grid>
                <Grid size={{ xs: 3, sm: 1, md: 2 }} sx={{ alignSelf: 'center', justifySelf: 'center' }}>
                    <NavButtons pageName={selectedPage} />
                </Grid>
            </Grid>
        </Box>
    );
}