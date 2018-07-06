import * as React from "react";
import "./../assets/scss/App.scss";
import Header from "../components/header";

const bettaBlue = require("./../assets/img/betta-blue.png");

export interface HomeProps {
}

export interface LandingFormProps {
}

export class LandingForm extends React.Component<LandingFormProps, undefined> {
  render() {
    return (
      <div className="section-black flex-row">
        <span className="flex-column">
          <h1 className="white landing-prompt">Everything you need to give your betta the best life possible</h1>
          <input type="text" id="email" name="email" placeholder="email@mail.com" />
          <span className="button-container">
            <input type="button" className="primary-button" value="Send me the best products" />
          </span>
        </span>
        <img className="align-right" src={bettaBlue} />
      </div>
    )
  }
}

export class SuppliesCards extends React.Component<LandingFormProps, undefined> {
  render() {
    return (
      <div className="section-white flex-row">
        <span className="flex-row">

        </span>
        <span className="flex-row">

        </span>
      </div>
    )
  }
}

export default class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <>
        <Header />
        <LandingForm />
      </>
    );
  }
}
