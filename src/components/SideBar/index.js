import React, { PureComponent } from 'react';
import { Link } from '@reach/router';
import propTypes from 'prop-types';
import './side-bar.scss';

class SideBar extends PureComponent {
  static Link({ to, title }) {
    return (
      <Link to={to} className="side-bar__link side-bar--padding-left" getProps={SideBar.isActive}>
        {title}
      </Link>
    );
  }

  static Header({ title }) {
    return <h3 className="side-bar__header side-bar--padding-left">{title}</h3>;
  }

  static Section({ section }) {
    const { title, links } = section;
    return (
      <ul className="side-bar__section">
        <SideBar.Header title={title} />
        {links.map((link) => {
          const { to, title: linkTitle } = link;
          return <SideBar.Link to={to} title={linkTitle} key={to} />;
        })}
      </ul>
    );
  }

  static isActive = ({ isCurrent }) => (isCurrent
    ? { className: 'side-bar__link side-bar--padding-left side-bar__link--active' }
    : null);

  render() {
    const { sections, open } = this.props;
    const openClass = open ? 'side-bar--open' : '';
    return (
      <div className={`side-bar ${openClass}`}>
        <h1 className="side-bar__logo side-bar--padding-left">giselle</h1>
        <div className="side-bar__wrapper">
          {sections.map(section => (
            <SideBar.Section section={section} key={section.title} />
          ))}
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  sections: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      links: propTypes.arrayOf(
        propTypes.shape({
          title: propTypes.string,
          to: propTypes.string,
        }),
      ),
    }),
  ).isRequired,
  open: propTypes.bool,
};

SideBar.defaultProps = {
  open: false,
};

export default SideBar;
