import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import SingleBook from './components/singleBook/singleBook';
import Borrow from './components/borrow/borrow';


export default function App() {
  return (
    <div>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singlebook" element={<SingleBook/>} />
            
            <Route path="/borrow" element={<Borrow/>} />

           
        </Routes>
        </Router>
    </div>
  )
}
