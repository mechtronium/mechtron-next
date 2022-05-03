import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import present from "@/styles/Presentation.module.css";
import project from "@/styles/ProjectAstro.module.css";


export default function Page() {

  var point_ref : Array<React.Ref<Point>> = [React.createRef(),React.createRef(),React.createRef(),React.createRef()];
  var point0 = <Point ref={point_ref[0]}><h3>Killer Feature &#123;<em>work in progress</em>&#125;</h3></Point>;
  var point1 = <Point ref={point_ref[1]}><h2>Safe Execution of Untrusted Code</h2></Point>;
  var point2 = <Point ref={point_ref[2]}><h2>Allowing Maximum Collaboration in Live Apps</h2></Point>;
  var point3 = <Point ref={point_ref[3]}><h3>and many more things...</h3></Point>;
  var content = (<><h1>PROJECT ASTRO</h1>

    <div className={project.row}>
        <div className={project.column}>
          <h3 className={project.sub_project}>Astro Mesh</h3>
        </div>
        <div className={project.column}>
           <h3 className={project.sub_project}>Astro Mesh API</h3>
        </div>
        <div className={project.column}>
           <h3 className={project.sub_project}>Mechtron</h3>
        </div>
    </div>




  </>);
  return <SomePage points={point_ref} next="/gripes" router={useRouter()}>{content}</SomePage>
}
