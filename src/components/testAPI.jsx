import React, { Component } from "react";
import axios from "axios";

class TestAPI extends Component {
  state = () => {
    data: [];
  };
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/bycountry").then(res => {
      // const persons = res.data;
      // this.setState({ persons });
      this.setState({ data: res });
      console.log(this.state.data);
    });
  }
  render() {
    let data = this.state.data;
    return (
      <div>
        {data ? <h1>Data Retrived</h1> : <h1 color="red">Data not Retrived</h1>}
      </div>
    );
  }
}

export default TestAPI;
