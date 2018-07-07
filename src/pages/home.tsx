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
          
          {/* mailchimp */}
          <div id="mc_embed_signup">
            <form action="https://surge.us18.list-manage.com/subscribe/post?u=7ba6e7a2ed1c20038280c9580&amp;id=ce502212a0" 
              method="post" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div>
                <div>
                  <input type="email" name="EMAIL" id="email" placeholder="email@mail.com" />
                </div>
                <div aria-hidden="true" className="hidden">
                  <input type="text" name="b_7ba6e7a2ed1c20038280c9580_ce502212a0" />
                </div>
                <div className="button-container">
                  <input type="submit" value="Send me the best products" name="subscribe" className="primary-button" />
                </div>
              </div>
            </form>
          </div>

          {/* mailchimp end */}
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
