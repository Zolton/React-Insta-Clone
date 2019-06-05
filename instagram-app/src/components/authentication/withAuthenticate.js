import React from "react";

const withAuthenticate = test =>
  class extends React.Component {
    render() {
      return <test />;
    }
  };

export default withAuthenticate;
