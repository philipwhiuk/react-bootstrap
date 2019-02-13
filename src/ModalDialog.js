import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { createBootstrapComponent } from './ThemeProvider';

class ModalDialog extends React.Component {
  static propTypes = {
    bsPrefix: PropTypes.string,

    /**
     * Specifies a large or small modal.
     *
     * @type ('sm'|'lg')
     */
    size: PropTypes.string,

    /**
     * Specify whether the Component should be vertically centered
     */
    centered: PropTypes.bool,

    /**
     * Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing.
     */
    scrollable: PropTypes.bool,
  };

  render() {
    const {
      bsPrefix,
      className,
      centered,
      scrollable,
      size,
      children,
      ...props
    } = this.props;

    const prefix = `${bsPrefix}-dialog`;
    return (
      <div
        {...props}
        className={classNames(
          prefix,
          className,
          size && `${bsPrefix}-${size}`,
          centered && `${prefix}-centered`,
          scrollable && `${prefix}-scrollable`,
        )}
      >
        <div className={classNames(`${bsPrefix}-content`)}>{children}</div>
      </div>
    );
  }
}

export default createBootstrapComponent(ModalDialog, 'modal');
