import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar title="TextAnalyzer" aboutText="About the text Utils" />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the required text you want to operate" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
