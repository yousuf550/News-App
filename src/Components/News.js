import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=caa21893e6794c11b48862f2980d9028&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("API DATA", parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=caa21893e6794c11b48862f2980d9028&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("API DATA", parsedData.articles);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=caa21893e6794c11b48862f2980d9028&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("API DATA", parsedData.articles);

      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h1>News - Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
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
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
