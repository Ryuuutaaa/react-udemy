import React from "react";

class ClassBasedComponents extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { courese: "my dream is react and javascript" };
  }

  render() {
    return (
      <>
        <div>
          <p>Class based components</p>
          <span>{this.props.test}</span>
          <br />
          <span>{this.props.children}</span>
          <br />
          <p>This state : {this.state.courese} course</p>
        </div>
      </>
    );
  }
}

export default ClassBasedComponents;
