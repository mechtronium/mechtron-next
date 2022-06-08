import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import project from "@/styles/ProjectAstro.module.css";


export default function Page() {


  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 22; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>Wasm Why?</h1>
    <Point ref={point_ref[0]}><h2>WebAssembly's Inevitable Ubiquity</h2></Point>
    <Point ref={point_ref[1]}><h4 className="point">THE GOOD</h4></Point>
    <ul>
    <Point ref={point_ref[2]}><li>Almost Any OS & Arch<p>[ including some embedded systems... IoT! ]</p></li></Point>
    <Point ref={point_ref[3]}><li>Much Smaller than Containers<p>[kb vs Gb]</p></li></Point>
    <Point ref={point_ref[4]}><li>More secure than Java and Docker</li></Point>

    </ul>
    <Point ref={point_ref[5]}><h4 className="point">THE IFFY</h4></Point>
    <ul>
      <Point ref={point_ref[6]}><li>Extreme Sandbox Limitations</li></Point>
      <Point ref={point_ref[7]}><li><blockquote>if host.exports != guest.imports || host.imports != guest.exports &#123;<br/>
        &nbsp;&nbsp;<span className="err">panic!(&quot;Wasm Guest/Host incompatible!&quot;)</span>;<br/>
                                                &#125;</blockquote></li></Point>
      <Point ref={point_ref[8]}><li>Wasi ... When?</li></Point>
      <Point ref={point_ref[9]}><li>No Standard deployment yet (other than JavaScript)</li></Point>
    </ul>
  </>);
  return <SomePage points={point_ref} next="/the_cosmic_initiative" router={useRouter()}>{content}</SomePage>
}
