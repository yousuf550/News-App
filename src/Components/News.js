import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [];

  constructor() {
    super();
    console.log("news component constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("component did mount ");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=caa21893e6794c11b48862f2980d9028";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData.articles);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    console.log("News component render ");
    return (
      <div className='container my-3'>
        <h1>News - Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  image_url={element.urlToImage}
                  news_url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
