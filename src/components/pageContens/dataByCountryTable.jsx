import React, { Component } from "react";
import axios from "axios";
import DataByCountryTableRow from "./dataByCountryTableRow";
import API from "../../covid19API.json";
class DataByCountryTable extends Component {
  state = {
    loaded: false,
    datas: []
  };
  componentDidMount() {
    let api = API["host"] + "bycountry";
    axios.get(api).then(res => {
      let data = JSON.parse(res.data);
      this.setState({ datas: data });
      // console.log(data);
    });
  }
  render() {
    let loaded = this.state.loaded;
    return (
      <div className="col-lg-9">
        <h2 className="title-1 m-b-25">Covid19 By country</h2>
        <div className="table-responsive table--no-card m-b-40">
          <table className="table table-borderless table-striped table-earning">
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Death</th>
                <th>Recovered</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.datas.map(data => (
                <DataByCountryTableRow
                  country={data.countryFullName}
                  confirmed={data.confirmedCount}
                  active={data.currentConfirmedCount}
                  deaths={data.deadCount}
                  recovered={data.curedCount}
                  countryShortCode={data.countryShortCode}
                />
              ))}
              {/* <DataByCountryTableRow
                country=""
                confirmed=""
                active=""
                death=""
                recovered=""
              /> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DataByCountryTable;
