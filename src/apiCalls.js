
const fetchAPI = {
  getAllUrls() {
    return fetch('http://localhost:3001/api/v1/urls')
    .then(response => {
      if (!response.ok) {
        throw new Error('Cannot load ideas!')
      } else {
        return response.json()
      }
    })
  },

  postNewUrls(newUrl) {
    return fetch('', {
      method: 'POST',
      body: JSON.stringify(newUrl),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if(!response.ok) {
        return response.json()
      }
    })
  }
}

export default fetchAPI
