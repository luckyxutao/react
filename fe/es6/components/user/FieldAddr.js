import React from 'react';
export default class FieldAddr extends React.Component {
    handleChange(e){
        this.props.setUserAddr(e.target.value);
    }
    render(){
        return  <div className="form-group">
                <label htmlFor="exampleInputPassword1">常住地址</label>
                <input value={this.props.useraddr} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="exampleInputPassword1" placeholder="常住地址" />
            </div>;
    }
}