import React from "react";

class ClassBasedComponents extends React.Component {
  state = { courese: "react" };
  render() {
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
