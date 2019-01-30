import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { getTextWidth, shouldUpdateValueLen, capitalizeFirstLetter } from '../../utils';
import { TEXT, PASSWORD } from '../../constants';
import './text-field.scss';

class TextField extends PureComponent {
  state = {
    value: this.props.value,
    valueLen: 0,
  };

  getCSSClasses() {
    const isPassword = this.isPassword();
    const { value } = this.state;
    const labelClass = value ? 'text-field__label--show' : '';
    const hideBottomBorderClass = value ? 'text-field--hide-bm-border' : '';
    const passwordClass = isPassword ? 'text-field--pwd' : '';
    return { labelClass, hideBottomBorderClass, passwordClass };
  }

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

  isPassword() {
    const { type } = this.props;
    return type === PASSWORD;
  }

  renderInput() {
    const {
      name, type, placeholder, inputProps,
    } = this.props;
    const { value } = this.state;
    const isPassword = this.isPassword();
    const passwordClass = isPassword ? 'text-field__input--pwd' : '';

    return (
      <input
        type={isPassword ? TEXT : type}
        id={name}
        className={`text-field__input ${passwordClass}`}
        placeholder={capitalizeFirstLetter(placeholder)}
        onChange={this.handleChange}
        value={value}
        autoComplete="off"
        spellCheck={isPassword ? 'false' : 'true'}
        {...inputProps}
      />
    );
  }

  render() {
    const { name, label, className } = this.props;
    const { valueLen } = this.state;
    const { labelClass, hideBottomBorderClass, passwordClass } = this.getCSSClasses();
    return (
      <div
        className={`text-field ${hideBottomBorderClass} ${className} ${passwordClass}`}
        role="presentation"
        tabIndex="-1"
      >
        {this.renderInput()}
        <label htmlFor={name} className={`text-field__label ${labelClass}`}>
          {capitalizeFirstLetter(label)}
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
  inputProps: propTypes.objectOf(propTypes.shape),
};

TextField.defaultProps = {
  value: '',
  name: '',
  type: 'text',
  label: '',
  className: '',
  placeholder: 'Enter your text',
  handleChange: () => {},
  inputProps: {},
};

export default TextField;
