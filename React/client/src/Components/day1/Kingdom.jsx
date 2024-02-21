import React from "react";
import Sparrow from "./Sparrow";
import Pigeon from "./Pigeon";
import Lion from "./Lion";
import Tiger from "./Tiger";
class Kingdom extends React.Component {
    render() {
      return (
        <div>
          <h2>Animal Kingdom</h2>
          <div>
            <h3>Animals</h3>
            <Lion />
            <Tiger/>
          </div>
          <div>
            <h2>Birds</h2>
            <Sparrow />
            <Pigeon/>
          </div>
        </div>
      );
    }
  }
  
  export default Kingdom;