import React from 'react'

import { Navbar, Maps, ScrollToTop } from './components';
import { Content, Featured, Footer, Header } from './containers';

const App = () => {
  return (
    <div className = 'App'>
      <div className = 'landing__pg'>
        <Navbar />
        <Header />
      </div>
      <Content />
      <Featured />
      <Footer />
      <Header />
    </div>
  )
}

export default App