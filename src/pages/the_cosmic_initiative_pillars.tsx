import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import project from "@/styles/ProjectAstro.module.css";


export default function Page() {


  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 33; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>THE COSMIC INITIATIVE</h1>
    <h2>Three Pillars</h2>

    <div className={project.row}>
      <Point ref={point_ref[0]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Mesh</h3>
          <Point ref={point_ref[3]}><h6><em>[ FACILITATES ]</em></h6></Point>
          <ul>
            <Point ref={point_ref[4]}> <li><h6>Particle Communication</h6></li> </Point>
            <Point ref={point_ref[5]}> <li><h6>Configuration</h6></li> </Point>
            <Point ref={point_ref[6]}> <li><h6>Command Execution</h6></li> </Point>
            <Point ref={point_ref[7]}> <li><h6>Provisioning</h6></li> </Point>
            <Point ref={point_ref[8]}> <li><h6>Deployments</h6></li> </Point>
            <Point ref={point_ref[9]}> <li><h6>Sharable Artifacts</h6></li> </Point>
            <Point ref={point_ref[10]}> <li><h6>Schema Enforcement</h6></li> </Point>
            <Point ref={point_ref[11]}> <li><h6>Security Enforcement</h6></li> </Point>
            <Point ref={point_ref[12]}> <li><h6>Mechtron Execution</h6></li> </Point>
            <Point ref={point_ref[13]}> <li><h6>Move Enterprise Complexity Away from Microservices</h6></li> </Point>
          </ul>
          <Point ref={point_ref[14]}>
            <h3 className={project.sub_project+" cool"}><em>&lt;(&nbsp;STARLANE&nbsp;)&gt;</em></h3>
          </Point>
        </div>
      </Point>
      <Point ref={point_ref[1]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Portal</h3>
          <Point ref={point_ref[15]}><h6><em>[ DEFINES ]</em></h6></Point>
          <ul>
            <Point ref={point_ref[16]}><li><h6>Cosmic Mesh API</h6></li></Point>
            <Point ref={point_ref[17]}><li><h6>Wave Passing Def <em>[messaging]</em></h6></li></Point>
            <Point ref={point_ref[18]}><li><h6>Serde Def</h6></li></Point>
            <Point ref={point_ref[19]}><li><h6>Config DSL</h6></li></Point>
            <Point ref={point_ref[20]}><li><h6>Command Line Interface DSL</h6></li></Point>
            <Point ref={point_ref[21]}><li><h6>Rust Portal API</h6></li></Point>
            <Point ref={point_ref[22]}><li><h6>Rust DSL Parser</h6></li></Point>
            <Point ref={point_ref[23]}><li><h6>Rust Portal Framework Implementation</h6></li></Point>
            <Point ref={point_ref[24]}><li><h6>Generated Client APIs for other Languages</h6></li></Point>
          </ul>
        </div>
      </Point>
      <Point ref={point_ref[2]}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Mechtron</h3>
          <Point ref={point_ref[25]}><h6><em>[ EXTENDS ]</em></h6></Point>
          <ul>
            <Point ref={point_ref[26]}><li><h6>WebAssembly + Cosmic Portal API</h6></li></Point>
            <Point ref={point_ref[27]}><li><h6>Send Waves <em>[messages]</em> to other Mesh Particles</h6></li></Point>
            <Point ref={point_ref[28]}><li><h6>Execute Cosmic Mesh Commands</h6></li></Point>
            <Point ref={point_ref[29]}><li><h6>Message other Mesh Particles</h6></li></Point>
            <Point ref={point_ref[30]}><li><h6>Configurable</h6></li></Point>
            <Point ref={point_ref[31]}><li><h6>Deployable</h6></li></Point>
            <Point ref={point_ref[32]}><li><h6>Wasm Host & Guest Frameworks</h6></li></Point>
          </ul>
        </div>
      </Point>
    </div>


  </>);
  return <SomePage points={point_ref} next="/starlane" router={useRouter()}>{content}</SomePage>
}
