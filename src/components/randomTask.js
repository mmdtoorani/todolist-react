import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
export const RandomTaskComponent = () => {
    const [todoList, setTodoList] = useState([]);
    const { isLoading } = useQuery([], () => {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => {
            setTodoList(res.data[Math.floor(Math.random() * res.data.length)].title)
        })
    })

    if (isLoading) return <h1>Loading..</h1>

    return <h1>{todoList}</h1>

    
}