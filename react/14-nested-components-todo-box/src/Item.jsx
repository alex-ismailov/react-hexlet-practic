import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {

  render() {
    const { task, onRemove } = this.props;

    return (
      <div>
        <div className="row">
          <div>
            <button onClick={onRemove} type="button" className="btn btn-primary btn-sm">-</button>
          </div>
          <div className="col-10">{task}</div>
        </div>
        <hr />
      </div>
    );
  }
}
// END
