import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 17; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>COSMIC BASICS</h1>
    <h2>Bundles & Artifacts</h2>
    <br/>

    <Point ref={point_ref[0]}>
    <h4 className="point">Bundle</h4>
      <ul>
      <Point ref={point_ref[1]}><li>Bundle == Zip File</li></Point>
      <Point ref={point_ref[2]}><li>Versioned<p>[&nbsp;i.e.: my-domain.com:repo:util:2.1.5&nbsp;]</p></li></Point>
      <Point ref={point_ref[3]}><li>UnRedact-able<p>[&nbsp;!modify && !delete]</p></li></Point>
      <Point ref={point_ref[4]}><li>Final point segment is ALWAYS a Version number</li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[5]}>
      <h4 className="point">Artifact</h4>
      <ul>
        <Point ref={point_ref[6]}><li>my-domain.com:repo:util:2.1.0:/config/some-config.config</li></Point>
        <Point ref={point_ref[6]}><li>Artifact.is_particle() == true</li></Point>
        <Point ref={point_ref[7]}><li>SubKinds<p>[&nbsp;Artifact&lt;Raw&gt;Artifact&lt;Image&gt;Artifact&lt;BindConfig&gt;Artifact&lt;Wasm&gt;&nbsp;]</p></li></Point>
        <Point ref={point_ref[8]}><li>Relative Artifacts can be referenced in configs<p>[&nbsp;Wasm = $&#123;doc.bundle&#125;:/wasm/super-code.wasm&nbsp;]</p></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[12]}>
      <h4 className="point">ArtifactCache</h4>
      <ul>
        <Point ref={point_ref[13]}><li>Starlane provides ArtifactCache for all Particles</li></Point>
        <Point ref={point_ref[14]}><li>Downloads and Extracts Bundles</li></Point>
        <Point ref={point_ref[14]}><li>Auto-parses some Artifacts based on comprehension rules</li></Point>
        <Point ref={point_ref[15]}><li>Raw Artifacts allowed<p>[&nbsp;localhost:repo:util:/rust/my-mechtron/Cargo.toml instanceof Artifact&lt;Raw&gt;&nbsp;]</p></li></Point>
      </ul>
    </Point>



  </>);
  return <SomePage points={point_ref} next="/create" router={useRouter()}>{content}</SomePage>
}
