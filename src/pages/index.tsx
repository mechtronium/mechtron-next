import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var point_ref : Array<React.Ref<Point>> = [React.createRef(),React.createRef(),React.createRef(),React.createRef()];
  var point0 = <Point ref={point_ref[0]}><h3>&lt;[ <em>Killer Feature</em> ]&gt;</h3></Point>;
  var point1 = <Point ref={point_ref[1]}><h2>Safe Execution of Untrusted Code...</h2></Point>;
  var point2 = <Point ref={point_ref[2]}><h2>Superfueling Collaboration through Code!</h2></Point>;
  var point3 = <Point ref={point_ref[3]}><h3>and many more things...</h3></Point>;
  var content = (<><h1>STARLANE</h1>{point0}{point1}{point2}{point3}</>);
  return <SomePage points={point_ref} next="/the_cosmic_initiative" router={useRouter()}>{content}</SomePage>
}
