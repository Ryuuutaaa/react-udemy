import React from "react";
class ClassBasedComponents extends React.Component {
  render() {
    return (
      <>
        <div>
          <p>Class based components</p>
          <span>{this.props.test}</span>
          <br />
          <span>{this.props.children}</span>
        </div>
      </>
    );
  }
}

export default ClassBasedComponents;
