import { Component } from "react";

class Class extends Component {
  constructor() {
    super();
    this.state = {
      carBrand: "Toyota",
      color: "black",
      model: "Lexus",
      year: 2022,
    };
  }
  changeColor = () => {
    this.setState({
      color: "brown",
    });
  };
  render() {
    return (
      <>
        <h2>
          Hello my car brand is {this.state.carBrand} the color is{" "}
          {this.state.color} model is {this.state.model} {""} {this.state.year}{" "}
        </h2>
        <button onClick={this.changeColor} style={{ background: "blueviolet" }}>
          Change Color
        </button>
      </>
    );
  }
}
export default Class;
