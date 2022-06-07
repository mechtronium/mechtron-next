import SomePage from '@/components/page';

import * as React from 'react';
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Page() {

  var content = (<><h1>THE COSMIC INITIATIVE</h1>
    </>);

  return <SomePage next="/the_cosmic_initiative_core_concepts" router={useRouter()}>{content}</SomePage>
}
