/* eslint-disable react/static-property-placement */
import React from 'react';

// BEGIN (write your solution here)
export default class App extends React.Component {
  static defaultProps = {
    text: '',
  };

  handleInputText = (e) => {
    e.preventDefault();
    const { dispatch, updateText } = this.props;
    const { target: { value } } = e;
    dispatch(updateText(value));
  };

  handleResetText = () => {
    const { dispatch, resetText } = this.props;
    dispatch(resetText());
  };

  renderText() {
    const { text } = this.props;
    return <div>{text}</div>;
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <form>
          <input onChange={this.handleInputText} type="text" value={text} />
          <button onClick={this.handleResetText} type="button">Reset</button>
        </form>
        {text && this.renderText()}
      </div>
    );
  }
}
// END
