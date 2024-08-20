import React from "react";

class ClassBasedComponents extends React.Component {
  state = { courese: "react" };

  componentDidMount() {
    console.log("after render");
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
