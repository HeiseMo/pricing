import React, { Component } from "react";
import Tick from '../svg/tick.svg';
import Modal from "./Modal"

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, option: "", status: false};
  }
  setOpen = (x) => {
    if(this.state.open === false){
        this.setState({open: true, option: x});
    } else {
        this.setState({open: false, option: ""});
    }
  }
  setActive = () => {
    if(this.state.status === false){
        this.setState({status: true});
    } else {
        this.setState({status: false});
    }
  }
  render() {
    let plans = this.props.plans;
    return (
      <div className={this.state.status ? "card card-active" : "card hover"}>
        {plans.map((plan, index) => {
          if (plan.title === this.props.type) {
            return (
              <>
                <div className="card-top">
                  <div className="card-top-title">
                  {plan.title === "Essential" ? <div className="circle-one"></div> : "" }
                  {plan.title === "Growth" ? <div className="circle-two"></div> : "" }
                    <span>{plan.title}</span>
                  </div>
                  <div className="card-top-description">
                    <span>{plan.description}</span>
                  </div>
                  <div className="card-top-pricing">
                    <span>{plan.price}</span>
                    <div className="rectangle"></div>
                    <div className="card-top-pricing-info">
                      <span>per month</span>
                      <span>per employee</span>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="card-bottom">
                  <div className="card-bottom-list">
                    <div className="first-tier">
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionOne}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              onClick={() => this.setOpen("hr")}
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                            {this.state.open && this.state.option === "hr" && <Modal title={plan.title}/>}
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionTwo}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionThree}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                      <div className="card-bottom-list-items">
                        <div className="card-bottom-list-items-group-one">
                          {plan.title === "Essential" ? (
                            <span className="tick">
                              <Tick transform="scale(0.5)" fill="#203C86" />
                            </span>
                          ) : (
                            <span className="hidden"></span>
                          )}
                          <span>{plan.optionFour}</span>
                        </div>
                        {plan.title !== "Essential" ? (
                          <span>
                            <img
                              className="info-icon"
                              src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                              alt=""
                            ></img>
                          </span>
                        ) : (
                          <span className="hidden"></span>
                        )}
                      </div>
                    </div>
                    {plan.title !== "Essential" ? <span className="plus">+</span> : "" }
                    <div className="higher-tier">
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionFive}</span>
                      </div>
                      {plan.title !== "Essential" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionSix}</span>
                      </div>
                      {plan.title !== "Essential" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                    <div className="card-bottom-list-items">
                      <div className="card-bottom-list-items-group-one">
                        <span className="hidden"></span>
                        <span>{plan.optionSeven}</span>
                      </div>
                      {plan.title !== "Essential" && plan.title !== "Growth" ? (
                        <span>
                          <img
                            className="info-icon"
                            src="https://cdn-icons-png.flaticon.com/24/18/18623.png"
                            alt=""
                          ></img>
                        </span>
                      ) : (
                        <span className="hidden"></span>
                      )}
                    </div>
                  </div>
                  </div>
                  <div onClick={() => this.setActive()} className="card-bottom-button">Select Plan</div>
                </div>
              </>
            );
          } else {
            return "";
          }
        })}
      </div>
    );
  }
}

export default Card;
