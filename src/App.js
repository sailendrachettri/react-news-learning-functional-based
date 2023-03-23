import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // VARIABLES
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 6;

  // STATES
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} category="general" />} />
          <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />} />
          <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} category="science" />} />
          <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} category="health" />} />
          <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} category="business" />} />
          <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />} />

        </Routes>

      </Router>
    </>
  )
}


export default App