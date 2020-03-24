import React, { Component } from "react";
import DataByCountryTable from "./dataByCountryTable";
import TopEffectedCountryTable from "./topEffectedCountryTable";

class DataTableRow extends Component {
  render() {
    return (
      <div className="row">
        <DataByCountryTable />
        <TopEffectedCountryTable />
      </div>
    );
  }
}

export default DataTableRow;
