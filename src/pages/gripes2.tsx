import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Gripes2() {

  var details = Array<React.Ref<PointDetail>>();
  for (var i = 0; i < 6; i++) {
    details[i] = React.createRef();
  }

  var gripe_refs = Array<React.Ref<Point>>();
  for (var i = 0; i < 3; i++) {
    gripe_refs[i] = React.createRef();
  }

  var gripes = [

    <Gripe2
      gripe_ref={details[0]}
      want_ref={details[1]}
      gripe_title="Message Sanitization Duplication"
      gripe_detail="Each Micro Service must have code to sanitize the same types of messages and ingested data."
      want_title="Mesh Sanitization of Messages"
      want_detail="I would like to know that the Mesh is sanitizing messages and ingested data so I can reduce sanitization and duplicate error checking in all of my various microservices."
    ></Gripe2>,
    <Gripe2
      gripe_ref={details[2]}
      want_ref={details[3]}
      gripe_title="Schema Coordination"
      gripe_detail="Schema definitions are shared through various build processes"
      want_title="Schema Centralization"
      want_detail="I would like all schema definitions to be centralized in the mesh which should be the ultimate authority."
    ></Gripe2>,
    <Gripe2
      gripe_ref={details[4]}
      want_ref={details[5]}
      gripe_title="Configuring Various Libraries"
      gripe_detail="In order to facilitate multiple types of communication (from the web, to the database, to rabbitMQ and Kafka...) I need to include various types of libraries which also require various configurations."
      want_title="One Messaging Library"
      want_detail="I would like ONE messaging library that is flexible enough to handle all forms of communication using a common configuration."
    ></Gripe2>,
  ];

  var content = (<><h1>DevOps Gripes</h1>
    <section>
      <h2>2) Micro Service Communication (Plumbing)</h2>
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
      </ul>
    </section>
  </>);
  return <SomePage points={gripe_refs} next="/gripes3" router={useRouter()}>{content}</SomePage>
}
