import React from "react";

class MyThing extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState((prevState) => {
      return { ...prevState, value: event.target.value };
    });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={(event) => {
          this.handleChange(event);
        }}
      />
    );
  }
}

export default MyThing;
