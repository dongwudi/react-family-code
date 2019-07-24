import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyCom extends Component {
  render() {
    const { change_name, asyncChange_name, name } = this.props;
    return (
      <Fragment>
        {name}
        <hr />
        <div onClick={change_name.bind(this)}>changename</div>
        <div onClick={asyncChange_name.bind(this)}>changename async</div>
      </Fragment>
    )
  }
}

function change_name() {
  return {
    type: 'CHANGE_NAME',
    name: 'lisi'
  }
}

function asyncChange_name() {
  return dispatch => {
    setTimeout(() => {
      dispatch(change_name());
    }, 1000);
  };
}

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ change_name, asyncChange_name }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCom)