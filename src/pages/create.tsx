import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {
  var point_ref = Array<React.Ref<Point>>();
  for (var i = 0; i < 10; i++) {
    point_ref[i] = React.createRef();
  }

  var content = (<><h1>STARLANE COMMANDS</h1>

    <Point ref={point_ref[0]}>
      <h4 className="point">CREATE</h4>
      <blockquote>
        <Point ref={point_ref[1]}>
          <p><span className="command">create</span> <span className="pnt_segment">my-domain.com</span>&lt;<span className="kind">Space</span>&gt;</p>
        </Point>
        <Point ref={point_ref[2]}>
          <p><span className="command">create</span> <span className="pnt_segment">my-domain.com</span>:<span className="pnt_segment">my-files</span>&lt;<span className="kind">FileSystem</span>&gt;</p>
        </Point>
        <Point ref={point_ref[3]}>
          <p><span className="command">create</span> <span className="pnt_segment">my-domain.com</span>:<span className="pnt_segment">users</span>&lt;<span className="kind">UserBase</span>&lt;<span className="sub_kind">Keycloak</span>&gt;&gt;</p>
        </Point>
        <Point ref={point_ref[4]}>
          <p><span className="command">create</span> my-domain.com:users:admin&lt;User&gt;&#123; +email=scott@mightydevco.com,
            +password=my-password &#125;</p>
        </Point>
        <Point ref={point_ref[5]}>
          <p>create ^[ my-local-file.txt ]-&gt; my-domain.com:my-files:/my-file.txt</p>
        </Point>
        <Point ref={point_ref[6]}>
          <p>create ^[ my-other-local-file.txt ]-&gt; my-domain.com:my-files:/my-dir/my-other-file.txt</p>
        </Point>
      </blockquote>
    </Point>

  </>);
  return <SomePage points={point_ref} next="/bind-basics" router={useRouter()}>{content}</SomePage>
}
