import React from "react";
import AnimalComponent from "./Animal";
class Lion extends React.Component {
  render() {
    return (
      <AnimalComponent
        name="Lion"
        description="lion para"
      />
    );
  }
}
export default Lion;
