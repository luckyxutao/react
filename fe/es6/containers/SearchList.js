import React from 'react';
import FilterByUser from '../components/FilterByUser'
import FilterByGender from '../components/FilterByGender'
import ViewList from '../components/ViewList'

class SearchList extends React.Component {

    render(){
        const { deleteByUser, filterByGender, filterByUser } = this.props
        return <section>
                <FilterByGender filterByGender={ filterByGender } gender={this.props.gender} />
                <FilterByUser filterByUser={ filterByUser } userfilter={this.props.userfilter}/>
                <ViewList deleteByUser={deleteByUser} gender={this.props.gender} username={this.props.userfilter.username} userlist={this.props.userlist} />
            </section>
    }
}

export default SearchList