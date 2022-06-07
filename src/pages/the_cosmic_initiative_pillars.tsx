import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import project from "@/styles/ProjectAstro.module.css";


export default function Page() {


  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 21; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>THE COSMIC INITIATIVE</h1>
    <h2>Three Pillars</h2>

    <div className={project.row}>
      <Point ref={point_ref[0]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Mesh</h3>
          <ul>
            <Point ref={point_ref[3]}> <li><h6>Complexity Syphon</h6></li> </Point>

            <Point ref={point_ref[4]}> <li><h6>Revolution of the Network</h6></li> </Point>
            <Point ref={point_ref[5]}> <li><h6>Inter Particle Communication</h6></li> </Point>
            <Point ref={point_ref[6]}> <li><h6>Provisioning & Hosting</h6></li> </Point>
            <Point ref={point_ref[7]}> <li><h6>A Facade for External Particles</h6></li> </Point>
            <Point ref={point_ref[8]}> <li><h6>Sharable Artifacts</h6></li> </Point>
            <Point ref={point_ref[9]}> <li><h6>Mechtrons</h6></li> </Point>
          </ul>
          <Point ref={point_ref[10]}>
            <h3 className={project.sub_project}><em>&lt;(&nbsp;STARLANE&nbsp;)&gt;</em></h3>
          </Point>
        </div>
      </Point>
      <Point ref={point_ref[1]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Portal</h3>
          <ul>
            <Point ref={point_ref[11]}><li><h6>Entry/Exit</h6></li></Point>
            <Point ref={point_ref[12]}><li><h6>Message Passing Definition</h6></li></Point>
            <Point ref={point_ref[13]}><li><h6>Serialization/Deserialization</h6></li></Point>
            <Point ref={point_ref[14]}><li><h6>Bind Configuration</h6></li></Point>
            <Point ref={point_ref[15]}><li><h6>Rust API</h6></li></Point>
            <Point ref={point_ref[16]}><li><h6>Generated Client APIs</h6></li></Point>
          </ul>
        </div>
      </Point>
      <Point ref={point_ref[2]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Mechtron</h3>
          <ul>
            <Point ref={point_ref[17]}><li><h6>WebAssembly + Astro Mesh Portal API</h6></li></Point>
            <Point ref={point_ref[18]}><li><h6>First Class Particle</h6></li></Point>
            <Point ref={point_ref[19]}><li><h6>Configurable</h6></li></Point>
            <Point ref={point_ref[20]}><li><h6>Deployable</h6></li></Point>
          </ul>
        </div>
      </Point>
    </div>


  </>);
  return <SomePage points={point_ref} next="/starlane" router={useRouter()}>{content}</SomePage>
}
