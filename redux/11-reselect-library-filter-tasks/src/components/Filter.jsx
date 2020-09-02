import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const { tasks: { currentFilterName } } = state;

  return { currentFilterName };
};

const actionCreators = {
  setTasksFilter: actions.setTasksFilter,
};

class Filter extends React.Component {

  handleFilter = (e) => {
    e.preventDefault();
  };

  render() {
    const { currentFilterName } = this.props;

    return (
      <div className="mt-3 d-flex justify-content-around">
        {filters.map((filter) => {
          const [ filterState, filterTitle ] = filter;
          if (filterState === currentFilterName) {
            return filterTitle;
          }
          return (
            <button
              onClick={this.handleFilter}
              key={filterState}
              type="button"
              className="btn btn-link border-0 p-0"
              data-test="task-filter-active"
            >
              {filterTitle}
            </button>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Filter);
// END
