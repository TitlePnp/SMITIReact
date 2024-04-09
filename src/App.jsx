import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './tailwind.css';

export default function App() {
    return (
        <>
            <div className='bg-white'>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Router>
            </div>
        </>

    );
}