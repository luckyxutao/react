import React from 'react';
import { connect } from 'react-redux'
import { setUserName, setUserJob, setUserAddr, createUser } from '../actions/user'
import BtnSubmit from '../components/user/BtnSubmit'
import FieldAddr from '../components/user/FieldAddr'
import FieldJob from '../components/user/FieldJob'
import FieldName from '../components/user/FieldName'

class CreateUserContainer extends React.Component {

    render(){
        const { setUserName, setUserJob, setUserAddr, user, createUser } = this.props;
        return <div className="bs-example" data-example-id="basic-forms">
                    <form>
                        <FieldName username={ user.name} setUserName={ setUserName }/>
                        <FieldJob userjob={ user.job} setUserJob={ setUserJob}/>
                        <FieldAddr useraddr={ user.addr} setUserAddr={ setUserAddr} />
                        <BtnSubmit user={ user} createUser={ createUser }/>
                    </form>
                </div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {
    setUserName, setUserJob, setUserAddr, createUser 
})(CreateUserContainer)