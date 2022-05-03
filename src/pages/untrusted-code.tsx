import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>EXECUTING UNTRUSTED CODE</h1>
    <h3>&#123;the killer feature&#125;</h3>

    <h4 className="point">THE GOAL</h4>
    <p>Allow users to upload a profile image Mechtron.  It will return a 1024x600 PNG</p>
    <h4 className="point">APP INSTALLATION</h4>
    <p>modify the App installation:</p>
    <blockquote>
      grant +CSD-RWX to .:users:$&#123;=user&#125;&lt;User&gt; on .:profiles:$&#123;user&#125;;<br/>
      bind .:profiles:* to [hub]::mechtron.io:site:1.0.0:/bind/profile.bind; <br/>
    </blockquote>

    <h4 className="point">AS USER UBERSCOTT</h4>
    <p>Uberscott writes a cool mechtron that returns a fractal as his profile image and binds it to his profile:</p>

    <blockquote>
      publish ^[ uberscotts-profile-mechtron-bundle.zip ]=&gt; [hub]::mechtronhub.com:users:uberscott:1.0.0;<br/>
      <br/>
      create my-domain:my-app:profiles:uberscott&#123; +config=[hub]::mechtronhub.com:users:uberscott:1.0.0:/config/uberscotts-profile.config &#125;;
    </blockquote>

    <h4 className="point">THAT'S IT!</h4>
    <p>Now Uberscott's profile will auto generate a fractal every time his profile background is requested!</p>

  </>);
  return <SomePage next="/enterprise" router={useRouter()}>{content}</SomePage>
}
