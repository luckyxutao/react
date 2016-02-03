import React from 'react';
import { connect } from 'react-redux'
import { setUserName, setUserJob, setUserAddr, updateUser, getUserById } from '../actions/user'
import BtnSubmit from '../components/user/BtnSubmit'
import FieldAddr from '../components/user/FieldAddr'
import FieldJob from '../components/user/FieldJob'
import FieldName from '../components/user/FieldName'

class EditUserContainer extends React.Component {
    componentDidMount() {
        const { dispatch, params } = this.props;
        dispatch(getUserById(params.uid))
    }
    render(){
        const { onNameChanged, onJobChanged, onAddrChanged, user, onSubmitClick } = this.props;
        return <div className="bs-example" data-example-id="basic-forms">
                    <form>
                        <FieldName username={ user.name} onNameChanged={ onNameChanged }/>
                        <FieldJob userjob={ user.job} onJobChanged={ onJobChanged}/>
                        <FieldAddr useraddr={ user.addr} onAddrChanged={ onAddrChanged} />
                        <BtnSubmit user={ user} onSubmitClick={ onSubmitClick }/>
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
    dispatch : dispatch,
    onAddrChanged: (addr) => {
      dispatch(setUserAddr(addr))
    },
    onJobChanged: ( job) =>{
        dispatch(setUserJob(job));
    },
    onNameChanged: ( name) =>{
        dispatch(setUserName(name));
    },
    onSubmitClick: (usermodel) =>{
        dispatch(updateUser(usermodel));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserContainer)