import React from "react";

type DetailProps = {
  children: React.ReactNode;
};


export class PointTitle extends React.Component<DetailProps, any> {
  render() {
    return this.props.children
  }
}
