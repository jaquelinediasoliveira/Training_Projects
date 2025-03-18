import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Menu.css'
import { useState } from 'react';

const ITEM_HEIGHT = 48;

export default function LongMenu({changeStatus, idItem, removeTask}) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeStatus = (id) => {
        changeStatus(id);
        handleClose();
    }

    const handleRemoveTask = (id) => {
        removeTask(id);
        handleClose();
    }
    
    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon fontSize='large'/>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    },
                }}
            >
                <MenuItem onClick={() => handleChangeStatus(idItem)}>Change status</MenuItem>
                <MenuItem onClick={() => handleRemoveTask(idItem)}>Delete task</MenuItem>
            </Menu>
        </div>
    );
}
