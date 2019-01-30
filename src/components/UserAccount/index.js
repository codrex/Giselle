import React, { PureComponent } from 'react';
import { Router } from '@reach/router';
import SideBar from '../SideBar';
import SideBarButton from '../SideBarButton';
import Header from '../Header';
import {
  Password, Personal, Email, Career,
} from '../Forms';
import { SIDE_BAR_SECTIONS } from '../../constants';

import './user-account.scss';

class UserAccount extends PureComponent {
  state = {
    isSideBarOpen: false,
  };

  toggleSideBar = () => {
    const { isSideBarOpen } = this.state;
    this.setState({ isSideBarOpen: !isSideBarOpen });
  };

  render() {
    const { isSideBarOpen } = this.state;
    return (
      <div className="user-account">
        <Header name="giselle">
          <SideBarButton
            className="user-account__sidebar-btn"
            isOpen={isSideBarOpen}
            handleClick={this.toggleSideBar}
          />
        </Header>

        <div className="user-account__header">
          <h1>your account</h1>
          <p>tell us a little more about yourself</p>
        </div>
        <div className="user-account__form">
          <Router>
            <Password path="manage/password" />
            <Email path="manage/email" />
            <Personal path="/account/personal" />
            <Career path="account/career" />
          </Router>
        </div>

        <SideBar sections={SIDE_BAR_SECTIONS} open={isSideBarOpen} />
      </div>
    );
  }
}

export default UserAccount;
