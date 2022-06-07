import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 10; i++) {
    point_ref[i] = React.createRef();
  }


  var content = (<><h1>THE COSMIC INITIATIVE</h1>

    <h2>Core Concepts</h2>

    <Point ref={point_ref[0]}>
      <h4 className="point">Astro Physic Themed Names</h4>
    </Point>

    <Point ref={point_ref[1]}>
      <h4 className="point">Particle</h4>
    </Point>

    <Point ref={point_ref[2]}>
      <h4 className="point">Star</h4>
    </Point>

    <Point ref={point_ref[3]}>
      <h4 className="point">Lane</h4>
    </Point>

    <Point ref={point_ref[4]}>
      <h4 className="point">Point</h4>
    </Point>

    <Point ref={point_ref[5]}>
      <h4 className="point">Wave</h4>
    </Point>

    <Point ref={point_ref[6]}>
      <h4 className="point">Ripple</h4>
    </Point>

    <Point ref={point_ref[7]}>
      <h4 className="point">Entanglement</h4>
    </Point>

    <Point ref={point_ref[9]}>
      <h4 className="point">Kind</h4>
    </Point>

  </>);
  return <SomePage points={point_ref} next="/the_cosmic_initiative_pillars" router={useRouter()}>{content}</SomePage>
}
