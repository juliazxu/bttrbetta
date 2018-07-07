import * as React from "react";
import "./../assets/scss/App.scss";

const logo = require("./../assets/img/bttrbetta-logo.svg");

export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps, undefined> {
  render() {
    return (
      <div className="header">
        <img src={logo} height="56px"/>
        <span className="links">Care FAQ - Coming soon</span>
        <span className="links">Supplies - Coming soon</span>
      </div>
    );
  }
}
