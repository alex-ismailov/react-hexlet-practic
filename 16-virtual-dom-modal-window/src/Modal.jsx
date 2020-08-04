/* eslint-disable react/static-property-placement */

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = ({ toggle, children }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button onClick={toggle} type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
  </div>
);

const Body = ({ children }) => <p className="modal-body">{children}</p>;

const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static defaultProps = {
    isOpen: false,
  };

  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    const modalClass = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    return (
      <div
        className={modalClass}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
// END
