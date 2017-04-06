import React from 'react';
import './style.scss';

const Header = ({ children }) =>
  <span className="header">{children}</span>

const Toolbar = ({ children }) =>
  <div className="toolbar">{children}</div>

export default {
  Toolbar,
  Header,
};