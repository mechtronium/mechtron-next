import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 10; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>COSMIC BASICS</h1>
    <h2>Particles, Points & Selectors</h2>


    <Point ref={point_ref[0]}>
    <h4 className="point">SELECT</h4>
    <blockquote>
      <p>select my-domain.com:users:*</p>
      <Point ref={point_ref[1]}><p>select my-domain.com:**</p></Point>
      <Point ref={point_ref[2]}><p>select my-domain.com:**&lt;File&gt;</p></Point>
    </blockquote>
    </Point>


  </>);
  return <SomePage points={point_ref} next="/cosmic-basics3" router={useRouter()}>{content}</SomePage>

}
