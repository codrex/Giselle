import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { getTextWidth, shouldUpdateValueLen } from '../../utils';
import './text-field.scss';

class TextField extends PureComponent {
  state = {
    value: this.props.value,
    valueLen: 0,
  };

  handleChange = (event) => {
    if (!event) return;
    const { value } = event.target;
    const { handleChange } = this.props;
    this.updateState(value);
    handleChange(value);
  };

  updateState(value) {
    const valueLen = shouldUpdateValueLen(getTextWidth(value, '#len-indicator>span'));
    this.setState({ valueLen, value });
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (this.state.value !== value) {
      this.updateState(value);
    }
  }

  render() {
    const {
      name, type, label, className, placeholder,
    } = this.props;
    const { value, valueLen } = this.state;
    const labelClass = value ? 'text-field__label--show' : '';
    const hideBottomBorderClass = value ? 'text-field--hide-bm-border' : '';
    return (
      <div
        className={`text-field ${hideBottomBorderClass} ${className}`}
        role="presentation"
        tabIndex="-1"
      >
        <input
          type={type}
          id={name}
          className="text-field__input"
          placeholder={placeholder}
          onChange={this.handleChange}
          value={value}
        />
        <label htmlFor={name} className={`text-field__label ${labelClass}`}>
          {label}
        </label>
        <div
          className="text-field__len"
          style={{ maxWidth: valueLen, width: valueLen }}
          id="len-indicator"
        >
          <span />
        </div>
      </div>
    );
  }
}

TextField.propTypes = {
  value: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  label: propTypes.string,
  className: propTypes.string,
  placeholder: propTypes.string,
  handleChange: propTypes.func,
};

TextField.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  label: '',
  className: '',
  placeholder: 'Enter your text',
  handleChange: () => {},
};

export default TextField;
