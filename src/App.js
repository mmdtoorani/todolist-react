import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';

import { HomeComponent } from './components/home';
import { RandomTaskComponent } from './components/randomTask';

function App() {
    

    return (
        <>
            <Router>
                <Link to={"/"}>Home</Link>
                <Link to={"/random-task"}>Random Task</Link>
                <Routes>
                    <Route path={"/"} element={<HomeComponent />} />
                    <Route path={"/random-task"} element={<RandomTaskComponent />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
