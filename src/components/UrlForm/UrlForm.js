import React, { useState } from 'react';

const UrlForm = ({addUrl}) => {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')
  // const [shortUrl, setShortUrl] = useState('')

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleUrlChange = (e) => {
    setUrlToShorten(e.target.value)
  }

  // const handleShortenUrlChange = (newUrl) => {
  //   setShortUrl(newUrl)
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      title: title,
      long_url: urlToShorten
    }
    addUrl(newUrl)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => handleTitleChange(e)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={e => handleUrlChange(e)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
