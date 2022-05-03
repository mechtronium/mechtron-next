import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>CONFIGURATION</h1>

    <h4 className="point">BIND</h4>
    <p>for my-domain.com:my-app:my-mechtron</p>
    <blockquote>
      Bind(version=1.0.0) &#123;<br/>

      <br/>
      &nbsp;&nbsp;Route -&gt; &#123;<br/>


      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Http&gt; -&gt; &#123;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt; -&gt; &#123;&#123;&#125;&#125; =&gt; &;<br/>

      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
      <br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>



      &#125;

    </blockquote>




  </>);
  return <SomePage next="/mechtron" router={useRouter()}>{content}</SomePage>
}
