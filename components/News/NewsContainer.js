import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import NewsDetail from './NewsDetail'

class NewsContainer extends Component {
  render() {
    return (
      <div className="news-container">
        <Row>
          <Col size="8">
            <NewsDetail title="" description="" />
          </Col>
          <Col size="4">Other News</Col>
        </Row>
      </div>
    )
  }
}
