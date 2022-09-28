
import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'

// API KEY: caa21893e6794c11b48862f2980d9028
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6}/>
      </div>
    )
  }
}
