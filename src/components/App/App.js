import React, { useState, useEffect } from 'react';
import './App.css';
import fetchAPI from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

const App = () => {
  const [urls, setUrls] = useState([])

  const fetchData = () => {
    fetchAPI.getAllUrls()
    .then(data => setUrls(data.urls))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addUrl = (newUrl) => {
    fetchAPI.postNewUrls(newUrl)
    fetchData()
    setUrls([...urls, newUrl])
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={addUrl}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    )
}

export default App;
