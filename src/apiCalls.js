
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
  }
}

export default fetchAPI
