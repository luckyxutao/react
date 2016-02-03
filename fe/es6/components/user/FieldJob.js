import React from 'react';
export default class FieldJob extends React.Component {
    handleChange(e){
        this.props.onJobChanged(e.target.value);
    }
    render(){
        return  <div className="form-group">
                <label htmlFor="exampleInputPassword1">职位</label>
                <input value={this.props.userjob} onChange={this.handleChange.bind(this)} type="text" className="form-control" id="exampleInputPassword1" placeholder="职位" />
            </div>;
    }
}