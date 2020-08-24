import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  // BEGIN (write your solution here)
  
  // END
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

class Tasks extends React.Component {
  // BEGIN (write your solution here)
  
  // END
}

export default connect(mapStateToProps, actionCreators)(Tasks);
