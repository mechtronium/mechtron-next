import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>CONFIGURATION</h1>

    <h4 className="point">BIND</h4>
    <p>A sophisticated configuration DSL for creating a binding contract between the Mesh and Particle.</p>
    <blockquote>
      Bind(version=1.0.0) &#123;<br/>
      <br/>
      &nbsp;&nbsp;Arg&lt;Vars&gt; &#123;

      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;company-name&lt;Text&gt; !! &quot;Company name required!&quot;;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;company-type&lt;Text&gt; ?= &quot;LCC&quot;;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;company-logo&lt;Bin~png&gt; !! &quot;PNG image required&quot;;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;? num-employees&lt;Int&gt;;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>
      &nbsp;&nbsp;Env&lt;Vars&gt; &#123;

      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;domain-name&lt;Text&gt; !! &quot;Domain required!&quot;;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>

      &nbsp;&nbsp;Env&lt;Particles&gt; &#123;
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;users&lt;UserBase&gt; !! &quot;Must have a UserBase!&quot;;<br/>
      &nbsp;&nbsp;&#125;<br/>

      <br/>
      &nbsp;&nbsp;Quotas &#123;
      <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;request-size max(1Mb)&#123;deny&#125;;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;messages limit(5/s)&#123;&#125; burst(100/m)&#123;break 30s&#125;;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>
      &nbsp;&nbsp;Isolation=Wasm;<br/>
      <br/>
      &nbsp;&nbsp;Route -&gt; &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;# more later ...<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>

      &#125;

    </blockquote>




  </>);
  return <SomePage next="/config" router={useRouter()}>{content}</SomePage>
}
