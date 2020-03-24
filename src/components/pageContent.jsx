import React, { Component } from "react";
import CaseCard from "./pageContens/caseCard";
import DataTableRow from "./pageContens/dataTableRow";
import ChatsRow from "./pageContens/chatsRow";
import CopyRightRow from "./pageContens/copyRightRow";
import axios from "axios";
import API from "../covid19API.json";

class PageContent extends Component {
  state = {
    loaded: false,
    active: "",
    confirmed: "",
    deaths: "",
    recovered: ""
  };
  componentDidMount() {
    let api = API["host"] + "globaldata";
    axios.get(api).then(data => {
      let globalStatistics = data["data"]["globalStatistics"];
      this.setState({
        active: globalStatistics["currentConfirmedCount"],
        confirmed: globalStatistics["confirmedCount"],
        deaths: globalStatistics["deadCount"],
        recovered: globalStatistics["curedCount"]
      });
      this.setState({ loaded: true });
      // console.log(data);
    });
  }
  render() {
    let loaded = this.state.loaded;
    return (
      <div className="page-container">
        <div className="main-content">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <h2 className="title-1">World-Wide overview</h2>
              {loaded ? (
                <div className="row m-t-25">
                  <CaseCard
                    name="Active Cases"
                    count={this.state.active}
                    cardStyle="covid19-active"
                  />
                  <CaseCard
                    name="Total Confirmed"
                    count={this.state.confirmed}
                    cardStyle="covid19-cofirmed"
                  />
                  <CaseCard
                    name="Deaths"
                    count={this.state.deaths}
                    cardStyle="covid19-deaths"
                  />
                  <CaseCard
                    name="Recovered"
                    count={this.state.recovered}
                    cardStyle="covid19-recovered"
                  />
                </div>
              ) : (
                <div>loading</div>
              )}

              <DataTableRow />

              <ChatsRow />
              <CopyRightRow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContent;
