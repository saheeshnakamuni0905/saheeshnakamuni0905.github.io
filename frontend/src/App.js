import React from 'react';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Animation from './components/Animation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'; // Create a Contact component if needed
import Bubbles from './components/Bubble';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-H52Y782SRR"; 

ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <Bubbles />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/Testimonials" element={<Testimonials />} /> */}
        </Routes>
          <Animation />
      </div>
    </Router>
  );
}

export default App;
