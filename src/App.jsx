import React, { Component } from "react";
import StudentCRUDContainer from "./containers/StudentCRUDContainer";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <StudentCRUDContainer />
      </div>
    )
  }
}