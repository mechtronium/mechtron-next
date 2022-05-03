import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>STARLANE</h1>


    <h4 className="point">Stack</h4>
    <ul>
      <li><h6>Rust</h6></li>
      <li><h6>Postgres</h6></li>
      <li><h6>Keycloak</h6></li>
    </ul>

    <h4 className="point">Architecture</h4>
    <ul>
      <li><h6>Star Kinds</h6>
          <p>[Central,Gateway,Auth,Space,App,Mechtron,Database,FileSystem,Relay]</p>
          <p>Different Kinds of Stars handle different Kinds of Particles</p>
      </li>
      <li><h6>Machines</h6>
      <p>Stars exist on Machines.   Machines can be baremetal servers, VMs or Containers.</p></li>
      <li><h6>Clustering</h6>
        <p>Stars can be distributed over a cluster of machines.</p>
      </li>
    </ul>

    <h4 className="point">Responsibilities</h4>
    <ul>
      <li><h6>Message Routing</h6></li>
      <li><h6>Resolving</h6>
        <p>Resolving Particle Points to exact Star locations.</p></li>
      <li><h6>Registry</h6>
        <p>Maintains a registry of Particles</p>
      </li>
    </ul>

    <h4 className="point">Kubernetes Operator</h4>
    <ul>
      <li><h6>Provisioning Services</h6>
        <p>Provisions Postgres & Keycloak (and more in the future)</p></li>
      <li><h6>Ingress for Starlane</h6></li>
      <li><h6>Redhat Certified</h6>
        <p>The Operator was created using Redhat's Golang Operator SDK which makes it born Redhat Certified.</p>
      </li>
      <li><h6>Enterprise Features</h6>
        <p>The Enterprise features are enabled through the use of the Kubernetes Operator.</p>
      </li>
    </ul>
  </>);
  return <SomePage next="/starlane-commands" router={useRouter()}>{content}</SomePage>
}
