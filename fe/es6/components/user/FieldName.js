import React from 'react';
export default class FieldName extends React.Component {
    handleChange(e){
        this.props.onNameChanged(e.target.value);
    }
    render(){
        return  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">用户名</label>
                    <input value={this.props.username} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名" />
                </div>;
    }
}