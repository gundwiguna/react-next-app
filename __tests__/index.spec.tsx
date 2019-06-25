import * as React from 'react'
import { mount, shallow } from 'enzyme'

import IndexPage from '../pages/index'
import Weather from '../pages/weather'
import News from '../pages/news'

const fetchFunctions = require('../functions/fetchFunctions')

describe('API Testing', () => {
  describe('Weather', () => {
    it('should success fetch data from API https://api.openweathermap.org/data/2.5/weather', function() {
      expect(fetchFunctions.fetchWeather()).toBeTruthy()
    })
  })
  describe('News', () => {
    it('should success fetch data from API https://newsapi.org/v2/top-headlines', function() {
      expect(fetchFunctions.fetchNews()).toBeTruthy()
    })
  })
})
