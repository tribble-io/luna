import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './assets'

import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Block from './components/blockFooter'
import LastBlock from './components/blockFooterLast'
import { Home, ChildrenStudio, Plays, Play, RomaskaAwards } from './pages'
import HistoryTheathre from './components/historyTheathre'
import Poster from './components/poster/poster'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/theatre-history' element={<HistoryTheathre />} />
          <Route path='/children-studio' element={<ChildrenStudio />} />
          <Route path='/posters' element={<Poster />} />
          <Route path='/plays' element={<Plays />} />
          <Route path='/play/:id' element={<Play />} />
          <Route path='/romaska-awards' element={<RomaskaAwards />} />
        </Routes>
        <footer>
          <Block />
          <LastBlock />
        </footer>
      </Router>
    </div>
  )
}

export default App
