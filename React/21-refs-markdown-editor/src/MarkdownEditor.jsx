import $ from 'jquery';
import React from 'react';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.rootElement = React.createRef();
  }

  componentDidMount() {
    $(this.rootElement.current).markdown({
      iconlibrary: 'fa',
      onChange: this.onChange,
    });
  }

  onChange = (e) => {
    this.props.onContentChange(e.getContent());
  }

  render() {
    return <div data-provide="markdown-editable" ref={this.rootElement} />;
  }
}
// END
