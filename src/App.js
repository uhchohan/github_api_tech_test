import React from 'react';
import Nav from './component/Nav';
import FooterSection from './component/footersection';
import Routes from './component/Routes';
import Spinner from './component/Spinner';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Spinner />
        <main role="main" className="container">
          <div className="App">
            <Routes/>
          </div>
        </main>
        <FooterSection />
        </Router>
    </div>
  )
}

export default App;