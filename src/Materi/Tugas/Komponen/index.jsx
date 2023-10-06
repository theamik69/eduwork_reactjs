import React from "react";
import ClassComponent from "./Component/ClassComponent";
import FungtionalKomponent from "./Component/FungtionalKomponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <FungtionalKomponent name="John" />
        <ClassComponent />
      </div>
    );
  }
}
  