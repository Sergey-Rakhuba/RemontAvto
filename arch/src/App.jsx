import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/pages/components/header'
import Footer from './components/pages/components/footer'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import ExemplsWork from './components/pages/ExemplsWork'
import Contacts from './components/pages/Contacts'
import AppWrapper from './_app'

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/exemplsWork" element={<ExemplsWork />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppWrapper>
  )
}

export default App
