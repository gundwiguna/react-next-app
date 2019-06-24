import React from 'react'

const NewsDetail = ({ title, description, author, publishedAt, url, urlToImage, content }) => {
  return (
    <div className="d-flex flex-column">
      <div className="news-header d-flex flex-column">
        <h3 className="text-center my-3">{title}</h3>
        <div className="news-muted">{`${publishedAt} by ${author}`}</div>
      </div>
      <img src={urlToImage} className="img-fluid news-img" alt="news" />
      <p>{description}</p>
      <p>{content}</p>
      <p>
        <a href={url} rel="noreferer noopener" target="_blank">
          Visit original site
        </a>
      </p>
    </div>
  )
}

export default NewsDetail
