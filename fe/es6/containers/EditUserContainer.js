import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as acts from '../actions/user'
import BtnSubmit from '../components/user/BtnSubmit'
import FieldAddr from '../components/user/FieldAddr'
import FieldJob from '../components/user/FieldJob'
import FieldName from '../components/user/FieldName'

class EditUserContainer extends React.Component {
    componentDidMount() {
        const { params } = this.props;
        this.props.actions.getUserById(params.uid)
    }
    render(){
        const { setUserName, setUserJob, setUserAddr, updateUser } = this.props.actions;
        const { user} = this.props;
        return <div className="bs-example" data-example-id="basic-forms">
                    <form>
                        <FieldName username={ user.name} onNameChanged={ setUserName }/>
                        <FieldJob userjob={ user.job} onJobChanged={ setUserJob}/>
                        <FieldAddr useraddr={ user.addr} onAddrChanged={ setUserAddr} />
                        <BtnSubmit user={ user} onSubmitClick={ updateUser }/>
                    </form>
                </div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : bindActionCreators(acts, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserContainer)