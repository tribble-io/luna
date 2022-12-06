import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Block from './components/blockFooter';
import LastBlock from './components/blockFooterLast';
import Plays from './pages/plays';
import Home from './pages';
import ChildrenStudio from './pages/children-studio';
import HistoryTheathre from './components/historyTheathre';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Nav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/plays" element={<Plays />} />
                    <Route path="/children-studio" element={<ChildrenStudio />} />
                    <Route path="/theatre-history" element={<HistoryTheathre />} />
                </Routes>
                <footer>
                    <Block />
                    <LastBlock />
                </footer>
            </Router>
        </div>
    );
}

export default App;
