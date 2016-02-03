import React from 'react';
export default class BtnSubmit extends React.Component {
    doSubmit(e){
        e.preventDefault();
        const {user, onSubmitClick} = this.props;
        onSubmitClick(user);
    }
    render(){
        return <button onClick={this.doSubmit.bind(this)} type="submit" className="btn btn-default">Submit</button>;
    }
}