import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>CONFIGURATION</h1>

    <h4 className="point">BIND</h4>
    <p>for my-domain.com</p>
    <blockquote>
      Bind(version=1.0.0) &#123;<br/>

      <br/>
      &nbsp;&nbsp;Route -&gt; &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Http&gt; -&gt; &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt; -&gt; my-domain:repo:site:2.3.1:/index.html =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt;/app/.* -&gt; my-domain:my-app =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt;(auth)/.* -&gt; my-domain:my-app:mechtrons:members =&gt; &;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>

      &#125;

    </blockquote>




  </>);
  return <SomePage next="/bind-routes2" router={useRouter()}>{content}</SomePage>
}
