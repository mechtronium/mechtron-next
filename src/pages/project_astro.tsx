import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>PROJECT ASTRO</h1>
    </>);

  return <SomePage next="/project_astro_core_concepts" router={useRouter()}>{content}</SomePage>
}
