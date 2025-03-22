import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Blog  from "./Pages/Blog.jsx";
import  Docs  from "./Pages/Docs/Docs.jsx";
import LP from './Pages/LP.jsx';
import React from 'react';

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route path="/" element={<LP />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Docs/*" element={<Docs />} />
          
        </Routes>
      </Router>
  </>
    
  )
}

export default App;