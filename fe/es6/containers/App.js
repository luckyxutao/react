import React, { Component } from 'react'
import CreateUserContainer from './CreateUserContainer'
import UserListContainer from './UserListContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example2</h2>
        <UserListContainer userlist={ this.props.userlist} />
      </div>
    )
  }
}