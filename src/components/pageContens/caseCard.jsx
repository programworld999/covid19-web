import React, { Component } from "react";

class CaseCard extends Component {
  state = {
    name: this.props.name,
    count: this.props.count,
    style: this.props.cardStyle
  };
  render() {
    return (
      <div className="col-sm-3 col-lg-3">
        <div className={`overview-item overview-item--c4 ${this.state.style}`}>
          <div className="overview__inner">
            <div className="overview-box clearfix">
              {/* <div className="icon"></div> */}
              <div className="text">
                <h2>{this.state.count}</h2>
                <h2>{this.state.name}</h2>
              </div>
            </div>
            <div className="overview-chart">
              <canvas id="widgetChart4"></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseCard;
