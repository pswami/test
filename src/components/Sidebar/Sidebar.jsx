import React from 'react';
import './styles.scss';
import {
  Link
} from 'react-router-dom';

const NavItem = ({ iconName, title, to }) => {
  return (
    <Link className="nav-icon-tab" to={to}>
      <div className={`icon ${iconName}`} />
      <div className="tab-title">{title}</div>
    </Link>
  );
};

export default class Sidebar extends React.Component {
  render() {
    return (
      <nav className="col-sm-2 col-lg-1 hidden-xs-down bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavItem
              iconName="league"
              title="League Office"
              to="/"
            />
          </li>
          <li className="nav-item">
            <NavItem
              iconName="team"
              title="My Team"
              to="/team"
            />
          </li>
          <li className="nav-item">
            <NavItem
              iconName="freeagency"
              title="Free Agents"
              to="/freeagents"
            />
          </li>
          <li className="nav-item">
            <NavItem
              iconName="standings"
              title="Standings"
              to="/standings"
            />
          </li>
          <li className="nav-item">
            <NavItem
              iconName="settings"
              title="Settings"
              to="/settings"
            />
          </li>
        </ul>
      </nav>
    );
  }
}