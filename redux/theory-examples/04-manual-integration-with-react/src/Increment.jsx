import React from 'react';

export default class Incerement extends React.Component {
  static defaultProps = {
    count: 0,
  };
  
  handleClick = () => {
    const { dispatch, increment } = this.props;
    dispatch(increment(10));
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>{count}</button>
      </div>
    );
  }
}
