import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import WOW from 'react-wow'
import moment from 'moment'

const NewsDetail = ({
  isOpen = false,
  toggle = () => {},
  className = '',
  newsModalData: {
    author,
    content,
    description,
    publishedAt: utcDate,
    source: { name = '' } = {},
    title,
    url,
    urlToImage,
  },
}) => {
  const publishedAt = moment(new Date(utcDate)).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <p className="news-date">{publishedAt}</p>
        <img src={urlToImage} alt="news-img" className="news-img" />
        <p>{content}</p>
        <p className="news-author">{author}</p>
      </ModalBody>
      <ModalFooter>
        <a
          className="btn btn-primary"
          rel="noopener noreferer"
          target="_blank"
          href={url}
          onClick={toggle}
        >
          Visit Original Source
        </a>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}

class NewsList extends Component {
  state = {
    newsList: {},
    newsModalOpen: false,
    newsModalData: {},
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
          <>
            <NewsDetail
              isOpen={this.state.newsModalOpen}
              toggle={() => this.setState({ newsModalOpen: !this.state.newsModalOpen })}
              newsModalData={this.state.newsModalData}
            />
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
                                <Button
                                  onClick={() => {
                                    this.setState({
                                      newsModalOpen: true,
                                      newsModalData: d,
                                    })
                                  }}
                                  className="mt-2"
                                  size="sm"
                                  color="success"
                                >{`Details`}</Button>
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
          </>
        )}
      </div>
    )
  }
}

export default NewsList
