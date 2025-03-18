import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import './Form.css'
import { useState } from 'react';
import Filter from '../Filter/Filter';

export default function Form({ inputData, setFilter }) {

    const [text, setText] = useState('');

    function createNewTask(e) {
        setText(e.target.value)
    }

    function addNewTask() {
        inputData(text)
        setText('')
    }

    const getTypeFilter = (i) => {
        if (i === '' | i === 'all') {
            setFilter('all')
        } else if (i === 'pending') {
            setFilter('pending')
        } else {
            setFilter('completed')
        }
    }

    return (
        <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            sx={{ flexWrap: 'wrap', justifyContent: 'center', mb:5 }}
        >
            <TextField
                id="outlined-multiline-flexible"
                label="New task"
                multiline
                maxRows={3}
                onChange={createNewTask}
                value={text}
                sx={{width:{xs:'90%', md: '60%', lg: "auto"}}}
            />
            <Button id='add-btn' variant="contained" disableElevation onClick={addNewTask}>Add</Button>
            <Filter typeFilter={getTypeFilter} />
        </Stack>
    );
}