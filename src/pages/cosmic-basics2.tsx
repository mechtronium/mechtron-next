import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 31; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>COSMIC BASICS</h1>
    <h2>Particles, Points & ParticleSelectors</h2>
    <br/>

    <Point ref={point_ref[0]}>
    <h4 className="point">Point</h4>
      <ul>
      <Point ref={point_ref[1]}><li>Point == List[ Segments ] == &lt;[<em>UniqueId</em>]&gt;</li></Point>
      <Point ref={point_ref[2]}><li>Hierarchical<p>[&nbsp;Point::from_str("my-domain.com:app")?.is_parent_of(Point::from_str("my-domain.com:app:child")?)==true&nbsp;]</p></li></Point>
      <Point ref={point_ref[3]}><li>Gleening<p>[&nbsp;(Point::from_str("localhost:my-files:/file.txt")?.guess_kind() == Some(Kind::File)) == true]</p></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[4]}>
      <h4 className="point">Point: Segments</h4>
      <ul>
        <Point ref={point_ref[5]}><li>SpaceSegment<p>[ lowercase host or domain name ]</p></li></Point>
        <Point ref={point_ref[6]}><li>BaseSegment<p>[ lower & skewer case ]</p></li></Point>
        <Point ref={point_ref[7]}><li>FileRootSegment ':/'</li></Point>
        <Point ref={point_ref[8]}><li>DirSegment<p>[ valid unix filesystem characters with trailing slash]</p></li></Point>
        <Point ref={point_ref[9]}><li>FileSegment<p>[ valid unix filesystem characters ]</p></li></Point>
        <Point ref={point_ref[10]}><li>VersionSegment<p>[ SemVer ]</p></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[11]}>
      <h4 className="point">Kind</h4>
      <ul>
        <Point ref={point_ref[12]}><li>Kinds of Kind<p>examples: [ App, User, UserBase, FileSystem, File, Bundle, Artifact, ... ]</p></li></Point>
        <Point ref={point_ref[13]}><li>SubKind<p>examples: [ Artifact&lt;Config&gt;, UserBase&lt;OAuth&gt; ]</p></li></Point>
        <Point ref={point_ref[14]}><li>Specific<p>example: [ Database&lt;Relational&lt;starlane.io:postgres.org:postgres:gis:13.1.3&gt;&gt; ]</p></li></Point>
        <Point ref={point_ref[15]}><li>Specific Segment Kinds<p>[&nbsp;provider-url:vendor-url:product:variant:version&nbsp;]</p></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[16]}>
      <h4 className="point">Point <em>[&nbsp;Advanced&nbsp;]</em></h4>
      <ul>
        <Point ref={point_ref[17]}><li>Space<p>[&nbsp;examples: localhost, my-domain.com&nbsp;]</p></li></Point>
        <Point ref={point_ref[18]}><li>Base<p>[&nbsp;examples: localhost:some-base, my-domain.com:users:uberscott&nbsp;]</p></li></Point>
        <Point ref={point_ref[19]}><li>FileSystem Dir<p>[&nbsp;examples: localhost:my-files:/some-directory/&nbsp;]</p></li></Point>
        <Point ref={point_ref[20]}><li>FileSystem File<p>[&nbsp;examples: localhost:my-files:/some-directory/some-file.txt&nbsp;]</p></li></Point>
        <Point ref={point_ref[21]}><li>Bundle<p>[&nbsp;examples: localhost:repo:website:1.0.7&nbsp;]</p></li></Point>
        <Point ref={point_ref[22]}><li>Artifact<p>[&nbsp;examples:<ul><li>localhost:repo:website:1.0.7:/html/index.html</li><li>my-domain.com:repo:utils:1.0.7:/config/calc-fibonacci.config</li><li>my-domain.com:repo:utils:1.0.7:/wasm/calc-fibonacci.wasm&nbsp;]</li></ul></p></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[23]}>
      <h4 className="point">Particle</h4>
      <ul>
        <Point ref={point_ref[24]}><li>Point + Kind = Particle<p>[&nbsp;tells you What & Where&nbsp;]</p><Point ref={point_ref[27]}><p>[&nbsp;example: my-domain:users:uberscot&lt;User&gt;&nbsp;]</p></Point></li></Point>
      </ul>
    </Point>

    <Point ref={point_ref[25]}>
      <h4 className="point">ParticleSelector</h4>
      <ul>
        <Point ref={point_ref[26]}><li>Segment matching<p>[ localhost:app ?= localhost:app == true ]</p></li></Point>
        <Point ref={point_ref[27]}><li>Wildcard<p>[ (localhost:* ?= localhost:app ) == true ]</p></li></Point>
        <Point ref={point_ref[28]}><li>Recursive Wildcard<p>[ (localhost:** ?= localhost:app:some-child ) == true ]</p></li></Point>
        <Point ref={point_ref[29]}><li>Kind Matching<p>[ (localhost:**&lt;User&gt; ?= localhost:users:uberscott&lt;User&gt; == true) && (localhost:**&lt;User&gt; ?= localhost:my-files:/some-dir/some-file.txt == false)</p></li></Point>
        <Point ref={point_ref[30]}><li>Specific Matching with SemVer<p>[ localhost:**&lt;Database&lt;Relational&lt;some-provider.com:postgres.org:postgres:gis:(&gt;=9.0.0 &lt;=11.0.0)&gt;&gt;&gt; ]</p></li></Point>
      </ul>
    </Point>

  </>);
  return <SomePage points={point_ref} next="/cosmic-basics3" router={useRouter()}>{content}</SomePage>
}
