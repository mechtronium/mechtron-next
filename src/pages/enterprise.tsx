import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 3; i++) {
    point_ref[i] = React.createRef();
  }


  var content = (<><h1>ENTERPRISE EDITION</h1>

    <Point ref={point_ref[0]}>
      <h4 className="point">Enterprise Kubernetes Operator</h4>
      <p>Both Community & Enterprise edition will have Kubernetes Operator but the Enterprise edition will have more in the way of scaling and distributing load</p>
    </Point>

    <Point ref={point_ref[1]}>
      <h4 className="point">Star Replicas</h4>
      <p>Ability to run Star Replicas on multiple machines whereas Community edition will just be one monolith</p>
    </Point>

    <Point ref={point_ref[1]}>
      <h4 className="point">Relay Nexus</h4>
      <p>Relay Stars (which simply forward traffic between Stars) will be supercharged in Enterprise with proper load balancing and ability to share state accross multiple relays.</p>
    </Point>

    <Point ref={point_ref[2]}>
      <h4 className="point">Postgres+</h4>
      <p>An enterprise worthy setup of Postgres (which handles the Starlane Registry) including PgBouncer, Stolon etc.</p>
    </Point>


  </>);
  return <SomePage points={point_ref} next="/index" router={useRouter()}>{content}</SomePage>
}
