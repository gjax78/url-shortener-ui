import React, { useState } from 'react';

const UrlForm = () => {
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState('')


  handleTitleChange = e => {
    setTitle(e.target.value);
  }

  handleUrlChange = e => {
    setUrlToShorten(e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    setTitle('')
    setUrlToShorten('')
  }


    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
}

export default UrlForm;
