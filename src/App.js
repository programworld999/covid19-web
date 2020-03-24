import React, { Component } from "react";
import Header from "./components/header";
import Aside from "./components/aside";
import PageContent from "./components/pageContent";

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        {/* <!-- HEADER MOBILE--> */}
        <Header />
        {/* <!-- END HEADER MOBILE--> */}

        <Aside />
        {/* <!-- END MENU SIDEBAR--> */}

        <PageContent />
      </div>
    );
  }
}

export default App;
