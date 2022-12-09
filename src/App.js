import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Block from "./components/blockFooter";
import LastBlock from "./components/blockFooterLast";
import Plays from "./pages/plays";
import Home from "./pages";
import HistoryTheathre from './components/historyTheathre';
import ChildrenStudio from "./pages/children-studio";
import Play from "./pages/play"
import Poster from './components/poster/poster';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/theatre-history" element={<HistoryTheathre />} />
          <Route path="/children-studio" element={<ChildrenStudio />} />
          <Route path="/posters" element={<Poster />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/play/:id" element={<Play />} />
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
