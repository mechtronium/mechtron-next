import React from "react";

type DetailProps = {
  children: React.ReactNode | React.ReactNode[];
};


type DetailState = {
  show: boolean
};


export class PointDetail extends React.Component<DetailProps, DetailState> {
  constructor(props: DetailProps) {
    super(props);
    this.state = {show: false};
  }

  render() {
    console.log("point detail show: " + this.state.show);
    if (this.state.show) {
      return this.props.children
    } else {
      return ""
    }
  }
}
