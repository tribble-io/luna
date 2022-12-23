import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './assets'

import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'
import {
  Home,
  ChildrenStudio,
  Plays,
  Play,
  RomaskaAwards,
  Press,
  Contacts,
  Scenes,
} from './pages'
import HistoryTheathre from './components/historyTheathre'
import Poster from './components/poster/poster'
import PageTeam from './pages/PageTeam/PageTeam'
import News from './components/news/news'
import PageDetailActor from './pages/PageDetailActor/PageDetailActor'
import NewsConroller from './components/news/oneNewsPage/newsController'
import Documets from './components/documents'

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
          <Route exact path='/news/*' element={<NewsConroller />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/scenes' element={<Scenes />} />
          <Route path='/actor/:id' element={<PageDetailActor />} />
          <Route path='/documets' element={<Documets />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
