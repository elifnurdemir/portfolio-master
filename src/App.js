// ./App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import BlogPage from './components/pages/BlogPage';
import Login from './components/pages/Login';
import BackToTopButton from './components/button/BackToTop';
import BlogInbox from './components/pages/BlogInbox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/page/:id" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bloginbox" element={<BlogInbox />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
