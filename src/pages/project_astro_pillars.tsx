import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import present from "@/styles/Presentation.module.css";
import project from "@/styles/ProjectAstro.module.css";


export default function Page() {

  var point_ref : Array<React.Ref<Point>> = [React.createRef(),React.createRef(),React.createRef(),React.createRef()];
  var point0 = <Point ref={point_ref[0]}><h3>Killer Feature &#123;<em>work in progress</em>&#125;</h3></Point>;
  var point1 = <Point ref={point_ref[1]}><h2>Safe Execution of Untrusted Code</h2></Point>;
  var point2 = <Point ref={point_ref[2]}><h2>Allowing Maximum Collaboration in Live Apps</h2></Point>;
  var point3 = <Point ref={point_ref[3]}><h3>and many more things...</h3></Point>;
  var content = (<><h1>PROJECT ASTRO</h1>
    <h2>The Three Pillars of Project Astro</h2>

    <div className={project.row}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Astro Mesh</h3>
          <ul>
            <li><h6>Complexity Syphon</h6>
              <p>Like all Mesh's the Astro Mesh is tasked with syphoning complexity from
              the Micro Services to the Mesh itself in order to reduce repeated functionality
              since there are many Micro Services and only one Mesh.</p>

            </li>
            <li><h6>Revolution of the Network</h6>
                <p>The Astro Mesh utilizes the traditional Network but completely masks it's
                   concepts replacing TCP connections with Messages and more.</p>
            </li>
            <li><h6>Inter Particle Communication</h6>
              <p>The Astro Mesh Handles messaging between particles.</p>
            </li>
            <li><h6>Provisioning & Hosting</h6>
              <p>The Astro Mesh Provisions and Hosts some Particles.</p>
            </li>
            <li><h6>A Facade for External Particles</h6>
              <p>The Astro Mesh provides a Facade for Particles that are not hosted by the
                mesh itself.  For example: let's say a Particle within the Mesh sends a request
                to a Postgres Database Row Particle to read a field.   The Postgres Database Row
                has no knowledge of the Mesh so the Mesh interprets the request and performs the appropriate
                action, in this case selecting the value of the field and returns the result as a message
                that can be understood by the requesting Particle.
              </p>
            </li>
            <li><h6>Sharable Artifacts</h6>
              <p>The Astro Mesh allows for the referencing and transfer of sharable Artifacts (such as config files, images, etc.) </p>
            </li>
          </ul>
          <h3 className={project.sub_project}>STARLANE</h3>
          <p>Presently STARLANE is the only implementation of the Astro Mesh!</p>
        </div>
        <div className={project.column}>
           <h3 className={project.sub_project}>Astro Mesh API</h3>
        </div>
        <div className={project.column}>
           <h3 className={project.sub_project}>Mechtron</h3>
        </div>
    </div>




  </>);
  return <SomePage points={point_ref} next="/gripes" router={useRouter()}>{content}</SomePage>
}
