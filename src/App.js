import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Block from "./components/blockFooter";
import LastBlock from "./components/blockFooterLast";
import { OP_WIDTH } from "./consts";
import Plays from "./pages/plays";
import Home from "./pages";

function App() {
  return (
    <div style={{ "--op-width": `${OP_WIDTH}px` }}>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/plays" element={<Plays />} />
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
