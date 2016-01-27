import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from './actions'
import SearchList from './containers/SearchList'
import React, { Component, PropTypes } from 'react'


function mapStateToProps(state) {
  return {
    userfilter: state.userfilter,
    gender : state.gender,
    userlist : state.userlist
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)
