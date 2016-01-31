import React, { Component }from 'react'
import { connect } from 'react-redux'
import UserListContainer from './UserListContainer'
import { getUsers } from '../actions/user'

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        debugger;
        const { dispatch } = this.props
        dispatch(getUsers())
    }

    render() {
        return ( <div>
                    <h2> Shopping Cart Example2 < /h2>
                    <UserListContainer userlist = {this.props.userlist}/>
                </div>
        )
    }
}

export default connect(function(){return {}})(App)