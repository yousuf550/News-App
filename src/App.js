import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  pageSize=6
  apiKey= process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            progress={this.state.progress}
            height={2}
            color='red'
          />
          <NavBar />
          <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country='us' category='general' />} />
          <Route exact path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country='us' category='business' />} />
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}   key="entertainment" pageSize={this.pageSize} country='us' category='entertainment' />} />
          <Route exact path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}   key="general2"pageSize={this.pageSize} country='us' category='general' />} />
          <Route exact path="/health" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country='us' category='health' />} />
          <Route exact path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country='us' category='science' />} />
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country='us' category='sports' />} />
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country='us' category='technology' />} />
          </Routes>
        </BrowserRouter>
        ,
      </div>
    );
  }
}
