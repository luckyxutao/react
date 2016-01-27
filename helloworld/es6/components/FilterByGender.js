import React from 'react';
export default class FilterByGender extends React.Component {
    handleChange(e){
        this.props.filterByGender(e.target.value);
    }
    render(){
        return  <div className="row">
                <div className="col-xs-4">按性别筛选</div>
                <div className="col-xs-4">
                  <select onChange={ this.handleChange.bind(this)} value={this.props.gender} className="form-control">
                    <option value="-1">All</option>
                    <option value="0">男</option>
                    <option value="1">女</option>
                  </select>
                </div>
            </div>;
    }
}