import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from './actions/user'
import CreateUser from './containers/CreateUser'
import React, { Component, PropTypes } from 'react'

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
