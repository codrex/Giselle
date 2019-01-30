import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import TextField from '../TextField';
import downArrow from '../../assets/img/downArrow.svg';
import './select.scss';

class Select extends PureComponent {
  state = {
    options: this.props.options,
    label: this.props.currentItem.label,
    hideOptions: true,
  };

  timeout = null;

  componentWillMount() {
    clearTimeout(this.timeout);
  }

  handleItemClick = item => () => {
    const { handleChange, options } = this.props;
    handleChange(item);
    this.setState({
      label: item.label,
      options,
      hideOptions: true,
    });
  };

  handleFocus = () => {
    clearTimeout(this.timeout);
    this.timeout = null;
    this.setState({ hideOptions: false });
  };

  handleBlur = () => {
    if (this.timeout) return;
    this.timeout = setTimeout(() => this.setState({ hideOptions: true }), 100);
  };

  filterOptions = (change) => {
    const { options } = this.props;
    const pattern = new RegExp(change, 'gi');
    let filteredOptions = options.filter(option => option.label.search(pattern) >= 0);
    filteredOptions = filteredOptions.length > 0 ? filteredOptions : options;
    this.setState({ options: filteredOptions, label: change });
  };

  renderDropDown() {
    const { options = [] } = this.state;
    return (
      <ul className="select__options">
        {options.map(item => (
          <li
            className="select__option"
            key={item.label}
            role="presentation"
            tabIndex="-1"
            onClick={this.handleItemClick(item)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { label, hideOptions } = this.state;
    const { label: selectLabel, placeholder } = this.props;
    return (
      <div
        className="select"
        role="presentation"
        tabIndex="-1"
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <TextField
          className="select__text-field"
          value={label}
          handleChange={this.filterOptions}
          label={selectLabel}
          placeholder={placeholder}
        />
        <img src={downArrow} alt="" />
        {!hideOptions && this.renderDropDown()}
      </div>
    );
  }
}

Select.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    }),
  ).isRequired,
  handleChange: propTypes.func,
  currentItem: propTypes.shape({ label: propTypes.string, value: propTypes.string }),
  label: propTypes.string,
  placeholder: propTypes.string,
};

Select.defaultProps = {
  handleChange: () => {},
  currentItem: { value: '', label: '' },
  label: '',
  placeholder: 'Enter your text',
};

export default Select;
