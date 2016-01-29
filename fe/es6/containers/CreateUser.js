import React from 'react';
import BtnSubmit from '../components/user/BtnSubmit'
import FieldAddr from '../components/user/FieldAddr'
import FieldJob from '../components/user/FieldJob'
import FieldName from '../components/user/FieldName'

class CreateUser extends React.Component {

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

export default CreateUser