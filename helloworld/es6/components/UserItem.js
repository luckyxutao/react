import React from 'react';
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
              <td>{u.gender == 1 ? '女' : '男'}</td>
              <td onClick={this.onDeleteItem.bind(this)}>删除</td>
            </tr>
        );
    }
}