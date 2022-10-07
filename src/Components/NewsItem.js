import React from "react";

const NewsItem = (props) => {
  let { title, description, image_url, news_url, author, date } = props;
  return (
    <div className='my-3'>
      <div className='card'>
        <img
          src={
            !image_url
              ? "https://media.istockphoto.com/photos/daily-papers-with-news-on-the-computer-picture-id1301656823?b=1&k=20&m=1301656823&s=170667a&w=0&h=s9IXcVfB151qb7Vb_9uJbl-XDGr2179rHA4ikgpdTUM="
              : image_url
          }
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title} </h5>

          <p className='card-text'>{description}</p>
          <p className='card-text'>
            <small className='text-muted'>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={news_url}
            target='_blank'
            rel='noreferrer'
            className='btn btn-sm btn-outline-primary'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
