import React from 'react';
import { connect } from 'react-redux'
import { setUserName, setUserJob, setUserAddr, createUser } from '../actions/user'
import BtnSubmit from '../components/user/BtnSubmit'
import FieldAddr from '../components/user/FieldAddr'
import FieldJob from '../components/user/FieldJob'
import FieldName from '../components/user/FieldName'

class CreateUserContainer extends React.Component {

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
        dispatch(createUser(usermodel));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserContainer)