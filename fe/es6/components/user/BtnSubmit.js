import React from 'react';
export default class BtnSubmit extends React.Component {
    createUser(e){
        e.preventDefault();
        const {user, createUser} = this.props;
        createUser(user);
    }
    render(){
        return <button onClick={this.createUser.bind(this)} type="submit" className="btn btn-default">Submit</button>;
    }
}