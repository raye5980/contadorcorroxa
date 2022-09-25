import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: purple;
`;
const Button = styled.button`
  width: 30%;
`;

export default class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    this.setState(() => ({ number: this.state.number + 1 }));
  };

  remove = () => {
    this.setState(() => ({ number: this.state.number - 1 }));
  };

  render() {
    return (
      <>
        <H1>{this.state.number}</H1>
        <Button
          onClick={() => {
            this.add();
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            this.remove();
          }}
        >
          -
        </Button>
      </>
    );
  }
}
