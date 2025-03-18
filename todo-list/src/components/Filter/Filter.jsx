import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

import { useState } from 'react';
import './Filter.css'
export default function Filter({ typeFilter }) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleFilter = (i) => {
        typeFilter(i.target.id)
        handleClose()
    }

    return (
        <Tooltip title="Filter" placement="right" arrow>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            ></Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{ marginTop: '5px' }}
            >
                <MenuItem id='all' onClick={handleFilter}>⚪ All</MenuItem>
                <MenuItem id='pending' onClick={handleFilter}>🔴 Pending</MenuItem>
                <MenuItem id='completed' onClick={handleFilter}>🟢 Completed</MenuItem>
            </Menu>
        </Tooltip>
    );
}