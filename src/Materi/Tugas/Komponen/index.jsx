import React from "react";
// import ClassComponent from "./Pembahasan/classComponent";
import FungtionalKomponent from "./Pembahasan/FungtionalKomponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <FungtionalKomponent name="John" />
        {/* <ClassComponent /> */}
      </div>
    );
  }
}
  