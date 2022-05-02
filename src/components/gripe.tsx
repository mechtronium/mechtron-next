import React from 'react';
import present from '@/styles/Presentation.module.css';
import {PointDetail} from "@/components/point_detail";

const Gripe = ({children}) => <>{children}</>;

type GripeProps = {
  gripe_title: string;
  want_title: string;
  gripe_detail: string;
  want_detail: string;
  gripe_ref: React.Ref<PointDetail>;
  want_ref: React.Ref<PointDetail>;
};

type GripeState = {};


class Gripe2 extends React.Component<GripeProps, GripeState> {

  render() {
    return (
      <div className={present.row} id="gripe">
        <div className={present.left_column}>
          <h3 className={present.gripe_title}>{this.props.gripe_title}</h3>
          <PointDetail ref={this.props.gripe_ref}><p>{this.props.gripe_detail}</p></PointDetail>
        </div>
        <div className={present.right_column}>
          <h3 className={present.want_title}>{this.props.want_title}</h3>
          <PointDetail ref={this.props.want_ref}><p>{this.props.want_detail}</p></PointDetail>
        </div>
      </div>
    );
  }
}

export default Gripe2;
