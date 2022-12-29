import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
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
import PageTeam from './pages/PageTeam/PageTeam'
import News from './pages/news'
import PageDetailActor from './pages/PageDetailActor/PageDetailActor'
import NewsConroller from './components/news/oneNewsPage/newsController'
import Poster from './pages/poster'
import HistoryTheathre from './pages/historyTheathre'
import Documets from './pages/documents'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import { defaultSetBodyClass, defaultGetSettings } from '@n3/react-vision-panel'

function App() {
  // For Accessibility plugin
  const settings = defaultGetSettings()
  Object.keys(settings).forEach((property) => {
    defaultSetBodyClass(property, settings[property])
  })
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
          <Route path='/person/:id' element={<PageDetailActor />} />
          <Route path='/documents' element={<Documets />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
          <Route path='/404' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
