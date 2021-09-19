import React, { Component } from "react";
import Tick from '../svg/tick.svg';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu-item">
        <div className="menu-item-title">
          <span>Core HR</span>
        </div>
        <div className="menu-item-description">
          Minimize HR headaches so you can get back to business
        </div>
        <div className="menu-item-list">
          <div className="menu-item-list-item">
            <span className="items">
              <Tick transform="scale(0.5)" fill="white" />
            </span>
            <span className="menu-item-list-text">Hiring & Onboarding</span>
          </div>
          <div className="menu-item-list-item">
            <span className="items">
              <Tick transform="scale(0.5)" fill="white" />
            </span>
            <span className="menu-item-list-text">Employee database</span>
          </div>
          <div className="menu-item-list-item">
            <span className="items">
              <Tick transform="scale(0.5)" fill="white" />
            </span>
            <span className="menu-item-list-text">Document management</span>
          </div>
          <div className="menu-item-list-item">
            <span className="items">
              <Tick transform="scale(0.5)" fill="white" />
            </span>
            <span className="menu-item-list-text">Reporting</span>
          </div>
        </div>
        <div className="menu-item-footer">
          <span>ALL FEATURES</span>
        </div>
      </div>
    );
  }
}

export default Modal;
