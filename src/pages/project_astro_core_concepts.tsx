import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 7; i++) {
    point_ref[i] = React.createRef();
  }


  var content = (<><h1>PROJECT ASTRO</h1>

    <h2>Core Concepts</h2>

    <Point ref={point_ref[0]}>
      <h4 className="point">Astro Physic Themed Names</h4>
      <p>To avoid naming collisions with other resources completely different names are used for
        common concepts. Names share an Astro Physics theme.</p>
    </Point>

    <Point ref={point_ref[1]}>
      <h4 className="point">Particle</h4>
      <p><strong>Enterprise Resource</strong>: Micro Services, Databases, Database Tables, Database Rows, FileSystems,
        Files, Artifacts, Users ... and many extendable types</p>
    </Point>

    <Point ref={point_ref[2]}>
      <h4 className="point">Point</h4>
      <p><strong>Resource's Address</strong>: every particle has an address so it may receive and send messages.</p>
    </Point>

    <Point ref={point_ref[3]}>
      <h4 className="point">Point Segment</h4>
      <p>A point may be made up of one or more colon delimited segments giving the point system a hierarchy. Example of
        a specific User point: <em>'<strong>my-domain.com:users:scott</strong>'</em></p>
    </Point>

    <Point ref={point_ref[4]}>
      <h4 className="point">Kind</h4>
      <p>Particles have a <em>Kind</em> denoted by enclosing in angle
        brackets: <strong>&lt;Space&gt;</strong>, <strong>&lt;User&gt;</strong> etc...</p>
    </Point>

    <Point ref={point_ref[5]}>
      <h4 className="point">SubKind</h4>
      <p>Some Particles have a SubKind for instance: <strong>&lt;UserBase&lt;KeyCloak&gt;&gt;</strong> -- this indicates
        a UserBase that is authenticated using KeyCloak</p>
    </Point>

    <Point ref={point_ref[6]}>
      <h4 className="point">Specific</h4>
      <p>And in order for 3rd parties to extend and create new types of Particles a Specific may further
        categories a Particles
        kind: <strong>&lt;Database&lt;Relational&lt;starlane.io:postgres:postgres:gis:13.0.1&gt;&gt;&gt;</strong> --
        this specific denotes the provider as
        as 'starlane.io', the vendor as 'postgres', the product as 'postgres', the variant as 'gis' and the version as
        '13.0.1'</p>
    </Point>


  </>);
  return <SomePage points={point_ref} next="/project_astro_pillars" router={useRouter()}>{content}</SomePage>
}
