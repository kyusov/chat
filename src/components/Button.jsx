import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import { Button as BaseButton } from 'antd';

function Button(props) {
  return (
    <BaseButton
      className={classnames('button', props.className, {
        'button--large': props.size === 'large',
      })}
      {...props}
    />
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
