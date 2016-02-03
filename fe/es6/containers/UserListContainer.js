import React from 'react';
import ComponentUserList from '../components/User/UserList'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUsers } from '../actions/user'

const ACTIVE = { color: 'red' }
class UserListContainer extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(getUsers())
    }
    render(){
        const { userlist } = this.props
        return <section>
                <span><Link to="/member/create" activeStyle={ACTIVE}>创建用户</Link></span>
                <ComponentUserList userlist={ userlist.list} />
            </section>
    }
}

function mapStateToProps(state) {
    return {
        userlist: state.userlist
    }
}
function mapDispatchToProps(dispatch) {
    return { getUsers, dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer)