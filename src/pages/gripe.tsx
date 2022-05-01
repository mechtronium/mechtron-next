import React, {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  FunctionComponent,
} from 'react';
import { LinkProps } from 'next/dist/client/link';
import present from '@/styles/Presentation.module.css';

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

type DetailProps = {
  show: boolean;
  text: string;
};

class Detail extends React.Component<DetailProps, any> {
  render() {
    if (this.props.show) {
      return <p>{this.props.text}</p>;
    } else {
      return <div style={{ display: `none` }} />;
    }
  }
}

class Gripe2 extends React.Component<GripeProps, GripeState> {
  componentDidMount() {
    this.setState({ show: true, details: true });
  }

  render() {
    if (this.state != null && this.state.show) {
      return (
        <div className={present.row}>
          <div className={present.left_column}>
            <h3 className={present.gripe_title}>{this.props.gripe_title}</h3>
            <Detail
              text={this.props.gripe_detail}
              show={this.state.details}
            ></Detail>
          </div>
          <div className={present.right_column}>
            <h3 className={present.want_title}>{this.props.want_title}</h3>
            <Detail
              text={this.props.want_detail}
              show={this.state.details}
            ></Detail>
          </div>
        </div>
      );
    } else {
      return <div style={{ display: `none` }}> </div>;
    }
  }
}
export default Gripe2;
