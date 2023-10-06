import React from "react";
import ClassComponent from "./component/classComponent";
import FungtionalComponent from "./component/fungtionalComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <FungtionalComponent name="John" />
        <ClassComponent />
      </div>
    );
  }
}
  