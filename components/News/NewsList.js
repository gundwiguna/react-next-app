import React, { Component } from 'react'
import { Table } from 'reactstrap'
import WOW from 'react-wow'
import moment from 'moment'

class NewsList extends Component {
  state = {
    newsList: {},
  }
  componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=f3f48338c7324e1e9b04846b509738aa'
    let req = new Request(url)
    fetch(req)
      .then(response => response.json())
      .then(data => {
        this.setState({ newsList: data })
      })
      .catch(err => alert(err.message))
  }

  render() {
    let delay = 0
    return (
      <div className="news-list">
        {!this.state.newsList.articles ? (
          `Loading data ...`
        ) : (
          <Table hover>
            <tbody>
              {this.state.newsList &&
                this.state.newsList.articles &&
                this.state.newsList.articles.map((d, i) => {
                  delay += 100
                  if (delay > 500) delay = 0
                  const {
                    author,
                    content,
                    description,
                    publishedAt: utcDate,
                    source: { name = '' } = {},
                    title,
                    url,
                    urlToImage,
                  } = d
                  const publishedAt = moment(new Date(utcDate)).format('MMMM Do YYYY, h:mm:ss a')
                  return (
                    <tr key={i}>
                      <WOW animation="fadeInUp" duration="400ms" delay={`${delay}ms`}>
                        <td>
                          <a href={url} target="_blank" rel="noopener noreferer">
                            <img className="news-img" src={urlToImage} alt="news-img" />
                          </a>
                        </td>
                        <td>
                          <div className="d-flex flex-column">
                            <a href={url} target="_blank" rel="noopener noreferer">
                              {title}
                            </a>
                            {description}
                            <span>
                              <a href={url} target="_blank" rel="noopener noreferer">
                                {` Read more...`}
                              </a>
                            </span>
                            <div className="news-muted align-self-end">{`Published: 
                          ${publishedAt}`}</div>
                          </div>
                        </td>
                        <td />
                      </WOW>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        )}
      </div>
    )
  }
}

export default NewsList
