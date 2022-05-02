import React from 'react';
import present from '@/styles/Presentation.module.css';
import {Detail} from "@/pages/detail";

const Gripe = ({ children }) => <>{children}</>;

type GripeProps = {
  gripe_title: string;
  want_title: string;
  gripe_detail: string;
  want_detail: string;
};

type GripeState = {
  show: boolean;
  details: boolean;
};



class Gripe2 extends React.Component<GripeProps, GripeState> {
  componentDidMount() {
    this.setState({ show: false, details: false});
  }


  render() {
    if (this.state != null && this.state.show) {
      return (
        <div className={present.row} id="gripe">
          <div className={present.left_column}>
            <h3 className={present.gripe_title}>{this.props.gripe_title}</h3>
            <Detail
              show={this.state.details}
            ><p>{this.props.gripe_detail}</p></Detail>
          </div>
          <div className={present.right_column}>
            <h3 className={present.want_title}>{this.props.want_title}</h3>
            <Detail
              show={this.state.details}
            ><p>{this.props.want_detail}</p></Detail>
          </div>
        </div>
      );
    } else {
      return <div style={{ display: `none` }}> </div>;
    }
  }
}
export default Gripe2;
