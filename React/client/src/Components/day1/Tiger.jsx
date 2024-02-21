import React from "react";
import AnimalComponent from "./Animal";
class Tiger extends React.Component {
  render() {
    return (
      <AnimalComponent
        name="Tiger"
        description="tiger para"
      />
    );
  }
}
export default Tiger;
