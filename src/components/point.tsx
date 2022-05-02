import React from 'react';
import {PointDetail} from "@/components/point_detail";

type PointProps = {
  details?: React.Ref<PointDetail>[],
  children: React.ReactNode | React.ReactNode[]
};

type PointState = {
  show: boolean;
  details: boolean;
};


export class Point extends React.Component<PointProps, PointState> {

  constructor(props: PointProps) {
    super(props);
    this.state = {show: false, details: false};
  }


  componentDidMount() {
    this.setState({show: false, details: false});
  }

  componentDidUpdate(prevProps: Readonly<PointProps>, prevState: Readonly<PointState>, snapshot?: any) {
    if (this.props != null && this.props.details != null) {
      for (var i = 0; i < this.props.details.length; i++) {
        var c = this.props.details[i];
        if( c.current != null ) {
          c.current.setState({show: this.state.details})
        }
      }
    }
  }


  render() {
    if (this.state.show) {
      return <>{this.props.children}</>;
    } else {
      return ""
    }
  }
}

export default Point;
