import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <button
        onClick={() => {
          this.updateCount();
          this.updateCount();
          this.updateCount();
        }}
      >
        Clicked {this.state.count} times
      </button>
    );
  }
}

export default Button;
