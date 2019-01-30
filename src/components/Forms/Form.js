import React, {
  PureComponent, Children, cloneElement, isValidElement,
} from 'react';
import propTypes from 'prop-types';
import './form.scss';

class Form extends PureComponent {
  state = {
    data: {},
  };

  handleChange = name => (value) => {
    const { data } = this.state;
    this.setState({ data: { ...data, [name]: value } });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.data);
  };

  renderChildren() {
    const { data } = this.state;
    const { children } = this.props;
    return Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        const element = cloneElement(child);
        const { name, label } = element.props;
        const inputName = name || label;
        return (
          <div className="form__group" style={{ animationDelay: `${index / 2}s` }}>
            <element.type
              {...element.props}
              handleChange={this.handleChange(inputName)}
              value={data[inputName]}
            />
          </div>
        );
      }
      return null;
    });
  }

  render() {
    const { className, name } = this.props;
    return (
      <form className={`form ${className}`}>
        <h3 className="form__header">{name}</h3>
        {this.renderChildren()}
      </form>
    );
  }
}

Form.propTypes = {
  children: propTypes.node.isRequired,
  handleSubmit: propTypes.func,
  className: propTypes.string,
  name: propTypes.string,
};

Form.defaultProps = {
  handleSubmit: () => {},
  className: '',
  name: '',
};

export default Form;
