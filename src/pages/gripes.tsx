import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";


export default function Home() {

  var details = Array<React.Ref<PointDetail>>();
  for (var i = 0; i < 8; i++) {
    details[i] = React.createRef();
  }

  var gripe_refs = Array<React.Ref<Point>>();
  for (var i = 0; i < 4; i++) {
    gripe_refs[i] = React.createRef();
  }

  var gripes = [

    <Gripe2
      gripe_ref={details[0]}
      want_ref={details[1]}
      gripe_title="Dependency Confusion"
      gripe_detail="Applications are often dependent upon a properly configured environment and even other applications to be preinstalled. It's difficult and time consuming prepping the host environment for the software."
      want_title="Dependency Contract"
      want_detail="I want Applications to define a 'contract' that describes what they expect to be available in their environment AND the host environment can use the contract
                    to properly 'wire' the Application including in some cases automatically provisioning resources and services requested by the contract."
    ></Gripe2>,
    <Gripe2
      gripe_ref={details[2]}
      want_ref={details[3]}
      gripe_title="Hunting Down Failures"
      gripe_detail="Need to 'hunt' down the root cause of a launch failure i.e.: verify service is 'Ready', check if there is an actionable problem event in the pod description, scan the logs for an insightful error message or check if a dependent service is accessible over the network."
      want_title="Actionable Failure Messages"
      want_detail="When installation fails I want an informative explanation of what expectation was not met and if possible suggestions on actions to take to resolve the problem."
    ></Gripe2>,
    <Gripe2
      gripe_ref={details[4]}
      want_ref={details[5]}
      gripe_title="Disjointed Network Primitives"
      gripe_detail="Network primitives are disjointed (hostname, port, credentials, etc)"
      want_title="Combined Mesh Concepts"
      want_detail="I want to refer to a resource by a common name like 'my-database' and have the host environment provide me with an already authenticated connection."
    ></Gripe2>,
    <Gripe2
      gripe_ref={details[6]}
      want_ref={details[7]}
      gripe_title="Secrets Sharing"
      gripe_detail="Difficult to find, mount and share secure secrets in a way that the software can consume (via Environment variables.)"
      want_title="Permission Comprehension"
      want_detail="Except in rare cases I don't wan the software to need secrets but rather the host environment to know which resources the software is allowed to access and for the host to fill in the appropriate secrets."
    ></Gripe2>
  ];

  var content = (<><h1>DevOps Gripes</h1>
    <section>
      <h2>1) Software Installation</h2>
      <ul>
        <li>
          <Point ref={gripe_refs[0]} details={[details[0], details[1]]}>
            {gripes[0]}
          </Point>
        </li>
        <li>
          <Point ref={gripe_refs[1]} details={[details[2], details[3]]}>
            {gripes[1]}
          </Point>
        </li>
        <li>
          <Point ref={gripe_refs[2]} details={[details[4], details[5]]}>
            {gripes[2]}
          </Point>
        </li>
        <li>
          <Point ref={gripe_refs[3]} details={[details[6], details[7]]}>
            {gripes[3]}
          </Point>
        </li>
      </ul>
    </section>
  </>);
  return <SomePage points={gripe_refs}>{content}</SomePage>
}
