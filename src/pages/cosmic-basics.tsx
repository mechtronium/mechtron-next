import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 1; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>COSMIC BASICS</h1>
    <Point ref={point_ref[0]}><p>The Cosmic Mesh is a <strong>facade</strong> where <strong>everything</strong> inside & outside of the Mesh is a bindable, pointable <em>[addressable]</em>, waveable <em>[messageable]</em> resource called a <strong>Particle</strong></p></Point>

  </>);
  return <SomePage points={point_ref} next="/cosmic-basics2" router={useRouter()}>{content}</SomePage>
}
