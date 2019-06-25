const fetch = require('node-fetch')

const fetchFunctions = {
  fetchNews: () => {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=f3f48338c7324e1e9b04846b509738aa'
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => false)
  },
  fetchWeather: () => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=fb17dfae9dc1c3311c54ce615ac96848&units=metric'
    return fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => false)
  },
}

module.exports = fetchFunctions
