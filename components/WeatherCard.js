import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'
import {
  Card,
  CardBody,
  CardTitle,
  Input,
  CardHeader,
  Row,
  Col,
  Table,
  Label,
  Button,
  FormGroup,
} from 'reactstrap'
import WOW from 'react-wow'

class WeatherCard extends Component {
  state = {
    data: {},
    cityInput: '',
    searchLocation: false,
    isLoadingRequest: false,
  }

  searchLocationHandler = () => {
    if (!this.state.cityInput) return

    const { cityInput } = this.state
    this.setState({ isLoadingRequest: true })
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&APPID=fb17dfae9dc1c3311c54ce615ac96848&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weatherData: data,
        })
      })
      .catch(err => {
        alert(err.message)
      })
      .finally(() => this.setState({ isLoadingRequest: false }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.coords && this.props.coords) {
      console.log('Update triggered')
      const { latitude, longitude } = this.props.coords
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=fb17dfae9dc1c3311c54ce615ac96848&units=metric`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            weatherData: data,
          })
        })
        .catch(err => {
          alert(err.message)
        })
    }
  }

  render() {
    const {
      weatherData: {
        name = '',
        weather = [{}],
        main: { humidity = '', pressure = '', temp = '', temp_max = '', temp_min = '' } = {},
        sys: { sunrise = '', sunset = '' } = {},
      } = {},
    } = this.state
    return (
      <div>
        <Row>
          <Col md={{ size: 8 }}>
            <WOW animation="fadeInUp" duration="500ms">
              <div className="d-flex flex-column my-2">
                <Label for="cityInput">Search by City</Label>
                <div className="d-flex">
                  <Input
                    className="w-75 mr-2"
                    onChange={e => this.setState({ [e.target.name]: e.target.value })}
                    name="cityInput"
                    id="cityInput"
                    type="text"
                    value={this.state.city}
                    placeholder="Type city name ..."
                  />
                  <Button
                    color="primary"
                    disabled={this.state.isLoadingRequest}
                    onClick={() => this.searchLocationHandler()}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </WOW>
            {this.state.searchLocation || !this.props.isGeolocationAvailable ? (
              <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
              <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (
              <Card>
                <WOW animation="fadeInUp" duration="500ms" delay="200ms">
                  <CardHeader>
                    <h3>Weather Information</h3>
                  </CardHeader>
                </WOW>
                <WOW animation="fadeInUp" duration="500ms" delay="200ms">
                  <CardBody>
                    <CardTitle>
                      <div>{`Weather Information in ${name}`}</div>
                      <div className="d-flex align-items-center">
                        <img
                          className="weather-icon mr-2"
                          src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                          alt={`weather-${weather[0].icon}`}
                        />
                        <b>
                          {weather[0].main} / {weather[0].description}
                        </b>
                      </div>
                    </CardTitle>
                    <Table>
                      <tbody>
                        <tr>
                          <td>Humidity</td>
                          <td>{`${humidity} %`}</td>
                        </tr>
                        <tr>
                          <td>Pressure</td>
                          <td>{pressure} hpa</td>
                        </tr>
                        <tr>
                          <td>Temperature</td>
                          <td>{temp}&#8451;</td>
                        </tr>
                        <tr>
                          <td>Max. Temperature</td>
                          <td>{temp_max}&#8451;</td>
                        </tr>
                        <tr>
                          <td>Min. Temperature</td>
                          <td>{temp_min}&#8451;</td>
                        </tr>
                        <tr>
                          <td>Sunrise</td>
                          <td>
                            {new Date(sunrise * 1000).toLocaleTimeString(undefined, {
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })}
                          </td>
                        </tr>
                        <tr>
                          <td>Sunset</td>
                          <td>
                            {new Date(sunset * 1000).toLocaleTimeString(undefined, {
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </WOW>
              </Card>
            ) : (
              `Loading weather information ...`
            )}
          </Col>
        </Row>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 10000,
})(WeatherCard)
