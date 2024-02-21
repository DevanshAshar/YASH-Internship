import React from 'react'
class AnimalComponent extends React.Component {
    render() {
      return (
        <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>
      );
    }
  }
export default AnimalComponent