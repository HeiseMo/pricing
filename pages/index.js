import React, { Component } from "react";
import Card from './components/Card';
import Plans from "./plans.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {plans: Plans};
  }
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
              <Card type="Essential" plans={this.state.plans}/>
              <Card type="Growth" plans={this.state.plans}/>
              <Card type="Performance" plans={this.state.plans}/>
            </div>
        </div>
      </div>
    </div>
    );
    } 
}

export default App;
