import React from 'react';
export default class FilterByUser extends React.Component {
    handleChange(e) {
        this.props.filterByUser(e.target.value);
    }
    render(){
        var userfilter = this.props.userfilter;
        var attrs = {};
        if( userfilter.frozen ){
            attrs.disabled = true;
        }
        return <div className="row">
                  <div className="col-xs-4">按姓名筛选</div>
                  <div className="col-xs-4">
                  <input {...attrs} type="text" value={userfilter.username} onChange={this.handleChange.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="姓名" />
                  </div>
                </div>;
    }
}