import React, { Component } from "react";
import Card from "./components/Card";
import Plans from "./plans.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: Plans,
      status: false,
      statusTierOne: false,
      statusTierTwo: false,
      statusTierThree: false,
    };
  }
  setActive = (tier) => {
    console.log(tier)
    if (tier === "Essential") {
      if (this.state.statusTierOne === false) {
        this.setState({ statusTierOne: true });
        this.setState({ statusTierTwo: false });
        this.setState({ statusTierThree: false });
      } else {
        this.setState({ statusTierOne: false });
        
      }
    }
    if (tier === "Growth") {
      if (this.state.statusTierTwo === false) {
        this.setState({ statusTierTwo: true });
        this.setState({ statusTierOne: false });
        this.setState({ statusTierThree: false });
      } else {
        this.setState({ statusTierTwo: false });
      }
    }
    if (tier === "Performance") {
      if (this.state.statusTierThree === false) {
        this.setState({ statusTierThree: true });
        this.setState({ statusTierOne: false });
        this.setState({ statusTierTwo: false });
      } else {
        this.setState({ statusTierThree: false });
      }
    }
    /*
    if (this.state.status === false) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }*/
  };
  render() {
    return (
      <div className="App">
        <div className="base-plans">
          <div className="base-plans-title">
            <span>Base plans</span>
          </div>
          <div className="base-plans-body">
            <div className="base-plans-body-selection">
              <span className="">Monthly</span>
              <span className="slash">/</span>
              <span className="">Yearly</span>
            </div>
            <div className="base-plans-body-cards">
              <Card
                type="Essential"
                statusTier={this.state.statusTierOne}
                status={this.state.status}
                setActive={this.setActive}
                plans={this.state.plans}
              />
              <Card
                type="Growth"
                statusTier={this.state.statusTierTwo}
                status={this.state.status}
                setActive={this.setActive}
                plans={this.state.plans}
              />
              <Card
                type="Performance"
                statusTier={this.state.statusTierThree}
                status={this.state.status}
                setActive={this.setActive}
                plans={this.state.plans}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
