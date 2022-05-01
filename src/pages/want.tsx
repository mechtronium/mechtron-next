import React from 'react';

type RevealState = {
  show: boolean;
};

class Want2 extends React.Component<{ children }, RevealState> {
  constructor(props) {
    super(props);
    console.log(`HI state == ` + this.state);
  }

  componentDidMount() {
    this.setState({ show: false });
    console.log(`BYE state == ` + this.state);
  }

  render() {
    console.log(`state == ` + this.state);
    if (this.state != null && this.state.show) {
      return <>{this.props.children}</>;
    } else {
      return <></>;
    }
  }
}
export default Want2;
