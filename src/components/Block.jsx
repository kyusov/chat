import React from 'react';
import classnames from 'classnames';

function Block({ children, className }) {
  return <div className={classnames('block', className)}>{children}</div>;
}

export default Block;
