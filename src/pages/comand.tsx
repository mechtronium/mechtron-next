import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 10; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>COMMANDS</h1>

    <Point ref={point_ref[0]}>
    <h4 className="point">CREATE</h4>
    <blockquote>
      <p>create my-domain.com&lt;Space&gt;</p>
      <p>create my-domain.com:my-files&lt;FileSystem&gt;</p>
      <p>create my-domain.com:users&lt;UserBase&lt;KeyCloak&gt;&gt;</p>
      <p>create my-domain.com:users:admin&lt;User&gt;&#123; +email=scott@mightydevco.com, +password=my-password &#125;</p>
      <p>create ^[ my-local-file.txt ]-&gt; my-domain.com:my-files:/my-file.txt</p>
      <p>create ^[ my-other-local-file.txt ]-&gt; my-domain.com:my-files:/my-dir/my-other-file.txt</p>
    </blockquote>
    </Point>



    <h4 className="point">SELECT</h4>
    <blockquote>
      <p>select my-domain.com:users:*</p>
      <p>select my-domain.com:**</p>
      <p>select my-domain.com:**&lt;File&gt;</p>
    </blockquote>


    <Point>
      <h4 className="point">GET</h4>
      <blockquote>
        <p>get my-domain.com:my-files:/my-dir/my-other-file.txt</p>
      </blockquote>
    </Point>


    <h4 className="point">PUBLISH</h4>
    <blockquote>
      <p>create my-domain.com:repo&lt;Repo&gt;:my-project&lt;ArtifactBundleSeries&gt;</p>
      <p>publish ^[ local-bundle.zip ]-&gt; my-domain.com:repo:my-project:1.0.0</p>
      <p>select my-domain:repo:my-project:1.0.0:/**</p>
    </blockquote>


  </>);
  return <SomePage next="/bind-basics" router={useRouter()}>{content}</SomePage>
}
