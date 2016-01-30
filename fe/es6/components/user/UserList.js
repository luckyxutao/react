import React from 'react';
import UserItem from './UserItem'
export default class UserList extends React.Component {
    render(){
        var that = this;
        const { userlist } = this.props;
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
                    userlist.map(function(result,idx){
                        return <UserItem key={idx + 'item'} idx={idx} user={result}/>;
                    })
                  }
              </tbody>
        </table>;
    }
}