import React, { Component } from "react";

class DataByCountryTableRow extends Component {
  state = {
    country: this.props.country,
    confirmed: this.props.confirmed,
    active: this.props.active,
    deaths: this.props.deaths,
    recovered: this.props.recovered,
    countryShortCode: this.props.countryShortCode
  };
  componentDidMount() {
    let countryLink =
      "https://ncov.dxy.cn/ncovh5/view/en_pneumonia_area?aid=" +
      this.state.countryShortCode +
      "&from=dxy&link=&share=&source=";
    // console.log(countryShortCode);
    this.setState({ countryShortCode: countryLink });
  }
  render() {
    return (
      <tr>
        <td>{this.state.country}</td>
        <td>{this.state.confirmed}</td>
        <td>{this.state.active}</td>
        <td>{this.state.deaths}</td>
        <td>{this.state.recovered}</td>
        <td>
          <a href={this.state.countryShortCode} target="_blank">
            More >>
          </a>
        </td>
      </tr>
    );
  }
}

export default DataByCountryTableRow;
