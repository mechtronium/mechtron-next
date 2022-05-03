import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>CONFIGURATION</h1>

    <h4 className="point">CONFIG</h4>
    <p>Installation and configuration of a Particle</p>
    <blockquote>
      App(version=1.0.0) &#123;<br/>

      <br/>
      &nbsp;&nbsp;Bind=$&#123;bundle&#125;:/bind/my-app.bind<br/>
      <br/>

      &nbsp;&nbsp;Arg&lt;Vars&gt; &#123;
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;company-type&lt;Text&gt; = &quot;S CORP&quot;;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>
      &nbsp;&nbsp;Env&lt;Particles&gt; &#123;
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;users&lt;UserBase&gt; ?= $(create .:users&lt;UserBase&lt;KeyCloak&gt;&gt;);<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;app&lt;App&gt; = $&#123;self&#125;;<br/>
      &nbsp;&nbsp;&#125;<br/>

      <br/>
      &nbsp;&nbsp;Install &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;create .:mechtrons&lt;Base&gt;;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;create .:mechtrons:my-mechtron&lt;Mechtron&gt;&#123; +config=[hub]::mechtron.io:examples:3.1.3:/config/my-mechtron.config &#125;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;create .:mechtrons:emailer&lt;Mechtron&gt;&#123; +config=[hub]::mechtron.io:utils:1.0.7:/config/emailer.config &#125;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;grant perm +cSd-RwX on $&#123;env.users&#125; to .:mechtrons:**;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;grant priv +prop:email&lt;Read&gt; on $&#123;env.users&#125;:*&lt;User&gt; to .:mechtrons:emailer;<br/>

      &nbsp;&nbsp;&#125;<br/>
      <br/>

      <br/>
      &nbsp;&nbsp;Wasm&#123;
      <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;bin=$&#123;bundle&#125;:/wasm/my-app.wasm;<br/>
      &nbsp;&nbsp;&#125;<br/>


      &#125;

    </blockquote>




  </>);
  return <SomePage next="/bind-routes" router={useRouter()}>{content}</SomePage>
}
