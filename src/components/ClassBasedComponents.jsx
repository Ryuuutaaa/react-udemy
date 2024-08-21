import React from "react";

class ClassBasedComponents extends React.Component {
  state = { courese: "react", counter: 1 };

  componentDidMount() {
    console.log("after render");
    // this.setState({ courese: "vue", counter: this.state.counter + 1 });
    this.setState((oldState) => {
      return {
        courese: "vue",
        counter: oldState.counter + 1,
      };
    });
  }

  render() {
    console.log("before render");
    return (
      <>
        <div>
          <p>Class based components</p>
          <p>This state : {this.state.courese} course</p>
        </div>
      </>
    );
  }
}

export default ClassBasedComponents;
