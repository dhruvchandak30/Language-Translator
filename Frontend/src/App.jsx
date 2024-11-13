import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Translate from './components/Translate';
import ParticlesBackground from './components/ParticlesBackground'; // Import ParticlesBackground
import './index.css'; // Or whatever your CSS file is named

function App() {
    return (
        <>
            {/* Render the ParticlesBackground outside of the Router */}
            <ParticlesBackground />

            {/* Main content should be above particles */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/translate" element={<Translate />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
