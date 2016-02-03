import React from 'react';
import { Link } from 'react-router'
export default class UserItem extends React.Component {
    onDeleteItem(){
        this.props.onDeleteItem(this.props.user.name);
    }
    render(){
        var u = this.props.user;
        var idx = this.props.idx;
        return (
            <tr>
              <th scope="row">{idx+1}</th>
              <td>{u.name}</td>
              <td>{u.job}</td>
              <td>{u.addr}</td>
              <td><Link to={"/member/edit/"+ u.uid}>编辑</Link></td>
            </tr>
        );
    }
}