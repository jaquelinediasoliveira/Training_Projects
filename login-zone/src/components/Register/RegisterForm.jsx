import { Box, Button, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Grid from '@mui/material/Grid';

import { useState } from "react";

import NavButtons from "../ChangePage/NavButtons";

export default function RegisterForm({ selectedPage, onAddUser }) {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const createNewUser = (e) => {
        e.preventDefault()

        const newUser = {
            "id": Date.now,
            "fullname": fullName,
            "username": username,
            "email": email,
            "password": password
        };

        onAddUser(newUser);

        alert('New user registered successfully!');

        setFullName('');
        setUsername('');
        setEmail('');
        setPassword('');

    }

    return (
        <Box className='formPageContainer'>
            <Typography variant="h3" component="h1" className="pageTitle" sx={{ fontWeight: '700' }}>REGISTER</Typography>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 3, sm: 5, md: 7, lg: 7, xl: 7 }}
                sx={{ width: '100%', height: '70%' }}>
                <Grid size={{ xs: 'none', sm: 1, md: 2 }} />
                <Grid size={{ xs: 3, sm: 3, md: 3 }} className='formContainer'>
                    <form className="form" onSubmit={createNewUser}>
                        <input required type="text" placeholder="Full name" className="input" autoComplete="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <input required type="text" placeholder="Username" className="input" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input required type="email" placeholder="E-mail" className="input" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Box className="input" id="alignPasswordInput">
                            <input required type={showPassword ? "text" : "password"} placeholder="Password" className="passwordInput"
                                autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {
                                (showPassword) ?
                                    <VisibilityOffIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                                    :
                                    <VisibilityIcon sx={{ color: "#757575", cursor: "pointer" }} onClick={handleClickShowPassword} />
                            }
                        </Box>
                        <Button type="submit" className="formSubmit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid size={{ xs: 3, sm: 1, md: 2 }} sx={{ alignSelf: 'center', justifySelf: 'center' }}>
                    <NavButtons pageName={selectedPage} />
                </Grid>
            </Grid>
        </Box>
    );
}