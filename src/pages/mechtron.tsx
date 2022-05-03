import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>MECHTRON</h1>

    <h4 className="point">THE CODE</h4>
    <blockquote>

      pub struct MyApp();<br/>
      <br/>

      impl Mechtron for MyApp &#123;<br/>
      <br/>
      &nbsp;&nbsp;fn handle_http_request(&self, ctx: &dyn MechtronCtx, request: HttpRequest ) -&gt; Result&lt;ResponseCore,Error&gt; &#123;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;Hello!&quot;.into()<br/>
      <br/>

      &#125;

    </blockquote>

    <h4 className="point">ABILITIES</h4>
    <ul>
      <li><p>Can run any command (Create, Select, Get, etc...)</p></li>
      <li><p>Ability to Spawn other requests</p></li>
      <li><p>Ability to grab configurations and assets from filesystems and artifact bundles</p></li>
    </ul>


    <h4 className="point">WHY WASM?</h4>
    <ul>
      <li><h6>Completely Secure Sandbox</h6></li>
      <li><h6>Runs in Almost Every OS</h6><p>(unlike containers)</p></li>
      <li><h6>Runs in Almost Arch</h6><p>(unlike containers)</p></li>
      <li><h6>Runs in embedded environments</h6></li>
    </ul>




  </>);
  return <SomePage next="/untrusted-code" router={useRouter()}>{content}</SomePage>
}
