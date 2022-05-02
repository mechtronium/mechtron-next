import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';


export default function Home() {

  var gripes = Array<React.Ref<Gripe2>>();
  gripes[0] = React.createRef();
  gripes[1] = React.createRef();
  gripes[2] = React.createRef();
  gripes[3] = React.createRef();

  var blah = (<><h1>DevOps Gripes</h1>
    <section>
      <h2>1) Software Installation</h2>
      <ul>
        <li>
          <Gripe2
            ref={gripes[0]}
            gripe_title="Dependency Confusion"
            gripe_detail="Applications are often dependent upon a properly configured environment and even other applications to be preinstalled. It's difficult and time consuming prepping the host environment for the software."
            want_title="Dependency Contract"
            want_detail="I want Applications to define a 'contract' that describes what they expect to be available in their environment AND the host environment can use the contract
                    to properly 'wire' the Application including in some cases automatically provisioning resources and services requested by the contract."
          ></Gripe2>
        </li>
        <li>
          <Gripe2
            ref={gripes[1]}
            gripe_title="Hunting Down Failures"
            gripe_detail="Need to 'hunt' down the root cause of a launch failure i.e.: verify service is 'Ready', check if there is an actionable problem event in the pod description, scan the logs for an insightful error message or check if a dependent service is accessible over the network."
            want_title="Actionable Failure Messages"
            want_detail="When installation fails I want an informative explanation of what expectation was not met and if possible suggestions on actions to take to resolve the problem."
          ></Gripe2>
        </li>
        <li>
          <Gripe2
            ref={gripes[2]}
            gripe_title="Disjointed Network Primitives"
            gripe_detail="Network primitives are disjointed (hostname, port, credentials, etc)"
            want_title="Combined Mesh Concepts"
            want_detail="I want to refer to a resource by a common name like 'my-database' and have the host environment provide me with an already authenticated connection."
          ></Gripe2>
        </li>
        <li>

          <Gripe2
            ref={gripes[3]}
            gripe_title="Secrets Sharing"
            gripe_detail="Difficult to find, mount and share secure secrets in a way that the software can consume (via Environment variables.)"
            want_title="Permission Comprehension"
            want_detail="Except in rare cases I don't wan the software to need secrets but rather the host environment to know which resources the software is allowed to access and for the host to fill in the appropriate secrets."
          ></Gripe2>
        </li>
      </ul>
    </section>
  </>);
  return <SomePage points={gripes}>{blah}</SomePage>
}
