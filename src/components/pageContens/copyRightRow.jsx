import React, { Component } from "react";

export class CopyRightRow extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="copyright">
            <p>
              Copyright © 2018 Colorlib. All rights reserved. Template by{" "}
              <a href="https://colorlib.com">Colorlib</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRightRow;
