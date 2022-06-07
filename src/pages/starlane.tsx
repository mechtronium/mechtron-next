import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 21; i++) {
    point_ref[i] = React.createRef();
  }


  var content = (<><h1>STARLANE</h1>


    <Point ref={point_ref[0]}>
      <h4 className="point">Stack</h4>
    <ul>
      <li><h6>Rust</h6></li>
      <li><h6>Kubernetes</h6></li>
      <li><h6>Docker</h6></li>
      <li><h6>Postgres</h6></li>
      <li><h6>Keycloak</h6></li>
      <li><h6>Redhat OperatorSDK</h6></li>
    </ul>
    </Point>

    <Point ref={point_ref[1]}>
    <h4 className="point">Architecture</h4>
    <ul>
  <Point ref={point_ref[2]}>
    <li>
          <h6>Stars&nbsp;</h6>
  </li></Point>
      <Point ref={point_ref[3]}>  <li><h6>Lanes</h6></li></Point>
      <Point ref={point_ref[4]}>
      <li><h6>Machines</h6></li>
      </Point>
      <Point ref={point_ref[5]}>  <li><h6>Messaging <em>&#123;&nbsp;Waves&nbsp;&#125;</em></h6></li></Point>
      <Point ref={point_ref[6]}>  <li><h6>Broadcasting <em>&#123;&nbsp;Ripples&nbsp;&#125;</em></h6></li></Point>
      <Point ref={point_ref[7]}>  <li><h6>Authentication</h6></li></Point>
      <Point ref={point_ref[8]}>  <li><h6>Sessions <em>&#123;&nbsp;Entanglements&nbsp;&#125;</em></h6></li></Point>
      <Point ref={point_ref[9]}>  <li><h6>Wrangling</h6></li></Point>
      <Point ref={point_ref[10]}>  <li><h6>Deployment</h6></li></Point>
      <Point ref={point_ref[11]}>  <li><h6>Sharding</h6></li></Point>
      <Point ref={point_ref[12]}>  <li><h6>Clustering</h6></li></Point>
        <Point ref={point_ref[13]}>     <li><h6>Routing</h6></li></Point>
      <Point ref={point_ref[14]}>     <li><h6>Registry</h6></li></Point>
      <Point ref={point_ref[15]}>     <li><h6>Searching, Finding & Selecting</h6></li></Point>
    </ul>
    </Point>



    <Point ref={point_ref[16]}>
    <h4 className="point">Kubernetes Operator</h4>
    <ul>
      <Point ref={point_ref[17]}>
      <li><h6>Provisioning Services</h6>
           <p>Provisions Postgres & Keycloak</p></li>
      </Point>
      <Point ref={point_ref[18]}>
      <li><h6>Manages Storage & Ingress for Starlane</h6></li>
      </Point>
      <Point ref={point_ref[19]}>
      <li><h6>Starlane Extensions managed though Operator's k8s CRDs</h6></li>
      </Point>
    </ul>
    </Point>
  </>);
  return <SomePage  points={point_ref} next="/starlane-commands" router={useRouter()}>{content}</SomePage>
}
