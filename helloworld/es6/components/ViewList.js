import React from 'react';
import UserItem from './UserItem'
export default class ViewList extends React.Component {
    render(){
        var gender = this.props.gender;
        var username = this.props.username;
        var userlist = this.props.userlist;
        var filtered = [].concat(userlist);
        if( username.length > 0){
            filtered = filtered.filter(function(v,i){
                if(~v.name.indexOf(username) ){
                    return true;
                }
            });
        }
        if( gender != '-1' ){
            filtered = filtered.filter(function(v,i){
                if(v.gender == gender ){
                    return true;
                }
            });
        }
        var that = this;
        return <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    filtered.map(function(result,idx){
                        return <UserItem onDeleteItem={that.props.deleteByUser} key={idx} idx={idx} user={result}/>;
                    })
                  }
              </tbody>
        </table>;
    }
}