import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

//COMPONENTS
import Header from '../components/header'
import UsersList from '../components/userList'

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <UsersList/>
        </div>
    );
  }
}

export default App;
