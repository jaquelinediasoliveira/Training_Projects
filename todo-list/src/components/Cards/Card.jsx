import { Grid2, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Tooltip from '@mui/material/Tooltip';

import './Card.css'

import { useState, useEffect } from 'react';
import LongMenu from '../Menu/Menu';

export default function Card({ cardInfo, filter }) {

    const [taskList, setTaskList] = useState(() => {
        const savedTaskList = localStorage.getItem('taskList');
        return savedTaskList ? JSON.parse(savedTaskList) : [];
    });

    const addTask = (taskDescription) => {
        setTaskList((prevTaskList) => {
            const newTask = {
                id: prevTaskList.length,
                status: false,
                task: taskDescription,
            };

            const updatedTaskList = [...prevTaskList, newTask];

            localStorage.setItem('taskList', JSON.stringify(updatedTaskList));

            return updatedTaskList;
        });
    };

    useEffect(() => {
        if (cardInfo !== '') {
            addTask(cardInfo)
        }
    }, [cardInfo]);

    const changeStatus = (id) => {
        const updateTaskStatus = taskList.map(task =>
            task.id === id ? { ...task, status: task.status === false ? task.status = true : task.status = false } : task
        );
        setTaskList(updateTaskStatus);
        localStorage.setItem('taskList', JSON.stringify(updateTaskStatus));
    }

    const removeTask = (id) => {
        const copyTask = taskList.reduce((remTask, task) => {
            if (task.id !== id) {
                remTask.push(task)
            }
            return remTask;
        }, [])
        setTaskList(copyTask);
        localStorage.setItem('taskList', JSON.stringify(copyTask));
    };

    return (
        <Grid2
            sx={{
                display: 'grid',
                gridTemplateAreas: { xs: 'a', sm: 'a b', md: "a b c", lg: 'a b c d' },
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }
            }}
        >
            {
                (taskList.length === 0) ?
                    <h2 style={{ color: '#c0c0c' }}>You don't have tasks</h2>
                    :
                    (filter === 'all') ?
                        taskList.map((item, index) => {
                            return (
                                <div className='card' key={index}>
                                    <div id='card-options'>
                                        <Tooltip title="Status" placement="top">
                                            <CircleIcon fontSize='small' sx={(item.status === false) ? { color: 'red' } : { color: 'green' }} />
                                        </Tooltip>
                                        <LongMenu changeStatus={changeStatus} idItem={item.id} removeTask={removeTask} />
                                    </div>
                                    <div id='card-text'>
                                        <Typography sx={{ flex: 1, wordWrap: 'break-word' }}>{item.task}</Typography>
                                    </div>
                                </div>
                            )
                        })
                        :
                        (filter === 'pending') ?
                            taskList.filter((task) => !task.status).map((item, index) => {
                                return (
                                    <div className='card' key={index}>
                                        <div id='card-options'>
                                            <Tooltip title="Status" placement="top">
                                                <CircleIcon fontSize='small' sx={(item.status === false) ? { color: 'red' } : { color: 'green' }} />
                                            </Tooltip>
                                            <LongMenu changeStatus={changeStatus} idItem={item.id} removeTask={removeTask} />
                                        </div>
                                        <div id='card-text'>
                                            <Typography sx={{ flex: 1, wordWrap: 'break-word' }}>{item.task}</Typography>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            taskList.filter((task) => task.status).map((item, index) => {
                                return (
                                    <div className='card' key={index}>
                                        <div id='card-options'>
                                            <Tooltip title="Status" placement="top">
                                                <CircleIcon fontSize='small' sx={(item.status === false) ? { color: 'red' } : { color: 'green' }} />
                                            </Tooltip>
                                            <LongMenu changeStatus={changeStatus} idItem={item.id} removeTask={removeTask} />
                                        </div>
                                        <div id='card-text'>
                                            <Typography sx={{ flex: 1, wordWrap: 'break-word' }}>{item.task}</Typography>
                                        </div>
                                    </div>
                                )
                            })

            }
        </Grid2>


    );
}