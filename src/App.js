import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './assets'

import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Block from './components/blockFooter'
import LastBlock from './components/blockFooterLast'
import {
  Home,
  ChildrenStudio,
  Plays,
  Play,
  RomaskaAwards,
  Press,
  Contacts,
} from './pages'
import HistoryTheathre from './components/historyTheathre'
import Poster from './components/poster/poster'
import PageTeam from './components/PageTeam/PageTeam'
import News from './components/news/news'
import OneOageNews from './components/news/oneNewsPage'
import PageDetailActor from './components/PageDetailActor/PageDetailActor'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/history' element={<HistoryTheathre />} />
          <Route path='/children-studio' element={<ChildrenStudio />} />
          <Route path='/playbill' element={<Poster />} />
          <Route path='/plays' element={<Plays />} />
          <Route path='/play/:id' element={<Play />} />
          <Route path='/romaska-awards' element={<RomaskaAwards />} />
          <Route path='/press' element={<Press />} />
          <Route path='/troupe' element={<PageTeam />} />
          <Route path='/news' element={<News />} />
          <Route exact path='/news/*' element={<OneOageNews />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/actor/:id' element={<PageDetailActor />} />
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
