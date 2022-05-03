import React from 'react';
import {PointDetail} from "@/components/point_detail";

type PointProps = {
  details?: React.Ref<PointDetail>[],
  children: React.ReactNode | React.ReactNode[]
};

type PointState = {
  show: boolean;
  done: boolean;
  index: number;
};


export class Point extends React.Component<PointProps, PointState> {

  constructor(props: PointProps) {
    super(props);
    this.state = {show: false, done: false, index: 0};
  }


  componentDidMount() {
    this.setState({show: false, done: false});
  }

  nextDetailHasMore() {
    if (this.props != null && this.props.details != null) {
      var index = this.state.index;
      for( var i=index-1; i>=0; i--) {
        this.props.details[i].current.setState( {show:false} );
      }
      if( index < this.props.details.length ) {
        this.props.details[index].current.setState( {show:true} );
        this.setState( {index: index+1} );
        return true;
      }
    }
    this.makeDone();
    return false;
  }

  makeDone() {
    this.setState( {done:true})
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
