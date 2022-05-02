import React, {ReactElement} from "react";
import ReactDOM from "react-dom";

type DetailProps = {
  show: boolean;
  children: React.ReactNode;
};




export class Detail extends React.Component<DetailProps, any> {
  render() {
    if (this.props.show) {
      return this.props.children
    } else {
      return <></>
    }
  }
}
