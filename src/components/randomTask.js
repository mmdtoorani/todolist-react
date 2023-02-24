import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import {Task} from './task';

export const RandomTaskComponent = () => {
    const [randomTodoList, setRandomTodoList] = useState([]);
    const { isLoading, isFetched, isSuccess } = useQuery(["task"], () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => setRandomTodoList(res.data))
    })
    
    const deleteTaskHandler = (id) => {
        setRandomTodoList(randomTodoList.filter((task) => {
            return task.id !== id;
        }));
    };

    const completeTask = (id) => {
        setRandomTodoList(randomTodoList.map((task) => {
            if (task.id === id) {
                return {...task, completed: true};
            } else {
                return task;
            }
        }))
    };

    if (isLoading) return <h1>Loading..</h1>

    return (
        <div className="list">
            {randomTodoList.map((task) => {
                    return <Task
                        taskName={task.title}
                        id={task.id}
                        completed={task.completed}
                        deleteTaskHandler={deleteTaskHandler}
                        completeTask={completeTask}
                    />;
                }
            )}
        </div>
    )
    
}