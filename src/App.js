import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 6;

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Routes>
            <Route path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" />} />
            <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
            <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" />} />
            <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" />} />
            <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" />} />
            <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" />} />
            <Route path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" />} />

          </Routes>

        </Router>
      </>
    )
  }
}

