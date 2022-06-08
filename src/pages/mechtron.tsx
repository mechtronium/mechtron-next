import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>MECHTRON</h1>

    <h4 className="point">uhmmmm...    <em>MECH....TRON?</em></h4>
    <ul>
      <li>Cosmic Mesh enabled WebAssembly
      <p>[ Cosmic Portal API + WebAssembly on Rust = Mechtron ]</p>
      </li>

    </ul>

    <h4 className="point">THE CODE</h4>
    <blockquote>

      #[derive(Mechtron)]<br/>
      pub struct MyMechtron();<br/>
      <br/>

      #[routes]
      impl MyMechtron&nbsp;&#123;<br/>
      <br/>
      &nbsp;&nbsp;#[route(Http&lt;Get&gt;/index.html)]<br/>
      &nbsp;&nbsp;fn hello_world(&self, ctx: InputCtx&lt;HttpRequest&gt; ) -&gt; Result&lt;&'static str,MsgErr&gt; &#123;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&quot;Hello World!&quot;<br/>
      <br/>

      &#125;

    </blockquote>

  </>);
  return <SomePage next="/untrusted-code" router={useRouter()}>{content}</SomePage>
}
