import React from "react";
import {useState} from 'react';
import {Task} from './task';

    
export const HomeComponent = () => {

    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const changeHandler = (event) => {
        setNewTask(event.target.value);
    };

    const newTaskHandler = (event) => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false
        }
        return setTodoList([...todoList, task])
    };

    const deleteTaskHandler = (id) => {
        setTodoList(todoList.filter((task) => {
            return task.id !== id;
        }));
    };

    const completeTask = (id) => {
        setTodoList(todoList.map((task) => {
            if (task.id === id) {
                return {...task, completed: true};
            } else {
                return task;
            }
        }))
    };

    return (
        <div className="home">
            <div className="add-task">
                <input type="text" onChange={changeHandler}></input>
                <button onClick={newTaskHandler}>Add task</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                        return <Task
                            taskName={task.taskName}
                            id={task.id}
                            completed={task.completed}
                            deleteTaskHandler={deleteTaskHandler}
                            completeTask={completeTask}
                        />;
                    }
                )}
            </div>
        </div>
    )
}