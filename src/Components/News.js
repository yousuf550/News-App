import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

class News extends Component {
  static defaultProps = {
    pageSize: 4,
    country: "us",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=caa21893e6794c11b48862f2980d9028&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    console.log("API URL", url, parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=caa21893e6794c11b48862f2980d9028&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=caa21893e6794c11b48862f2980d9028&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:"25px"}}>News - Top Headlines</h1>
        <hr />
        {this.state.loading && <Spinner />}

        <div className='row'>
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className='col-lg-4 col-md-5' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    image_url={element.urlToImage}
                    news_url={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
