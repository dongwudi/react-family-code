import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MyCom extends Component {
  render() {
    const { change_name, name } = this.props;
    return (
      <Fragment>
        {name}
        <hr />
        <div onClick={change_name}>changename</div>
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

function mapStateToProps(state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ change_name }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCom)