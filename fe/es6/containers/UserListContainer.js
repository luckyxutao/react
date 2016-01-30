import React from 'react';
import ComponentUserList from '../components/User/UserList'
import { connect } from 'react-redux'
import { getUsers } from '../actions/user'
class UserListContainer extends React.Component {

    render(){
        const { userlist } = this.props
        return <section>
                <ComponentUserList userlist={this.props.userlist} />
            </section>
    }
}

function mapStateToProps(state) {
    return {
        userlist: state.userlist
    }
}

export default connect(mapStateToProps, {
    getUsers
})(UserListContainer)