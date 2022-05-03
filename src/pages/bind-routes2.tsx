import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>CONFIGURATION</h1>

    <h4 className="point">BIND</h4>
    <p>for my-domain.com:my-app</p>
    <blockquote>
      Bind(version=1.0.0) &#123;<br/>

      <br/>
      &nbsp;&nbsp;Route -&gt; &#123;<br/>


      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Http&gt;(auth) -&gt; &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Post&gt;/app/users/(?P&lt;username&gt;)/.* -&gt; .:users:$&#123;username&#125; =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Post&gt;/app/(?P&lt;username&gt;)/upload-file -[ Bin ]-&gt; .:uploads:/files/$&#123;username&#125; =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Post&gt;/app/(?P&lt;username&gt;)/pic -[ Bin~png ]-&gt; .:uploads:/pic/$&#123;username&#125; =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt;(auth)/.* -&gt; my-domain:my-app:mechtrons:members =&gt; &;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;Http&gt;(noauth) -&gt; &#123;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Post&gt;/app/signup -[ Json ]-&gt; .:mechtrons:valid-email-checker -&gt; .:mechtrons:signup =&gt; &;<br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Get&gt;/app/users/(?P&lt;username&gt;)/pic -&gt; .:uploads:/pic/$&#123;username&#125; =[ Bin~png ]=&gt; &;<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
      &nbsp;&nbsp;&#125;<br/>
      <br/>



      &#125;

    </blockquote>




  </>);
  return <SomePage next="/bind-routes3" router={useRouter()}>{content}</SomePage>
}
