import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import WeatherCard from '../components/WeatherCard'

const Weather = props => {
  return (
    <Layout>
      <h3>Weather</h3>
      <WeatherCard />
    </Layout>
  )
}

export default Weather
