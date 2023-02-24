import './App.css';
import {BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import { HomeComponent } from './components/home';
import { RandomTaskComponent } from './components/randomTask';

function App() {
    const client = new QueryClient({defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }});

    return (
        <>
            <QueryClientProvider client={client}>
                <Router>
                    <div className='navbar'>
                        <Link to={"/"} > <button className='btn'>Home</button></Link>
                        <Link to={"/random-task"}><button className='btn'>Random Task</button></Link>
                    </div>
                    <Routes>
                        <Route path={"/"} element={<HomeComponent />} />
                        <Route path={"/random-task"} element={<RandomTaskComponent />} />
                    </Routes>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default App;
