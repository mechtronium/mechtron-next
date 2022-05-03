import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";


export default function Gripes1() {
  var content = (<><h1>DevOps Gripes</h1></>);
  return <SomePage next="/gripes1" router={useRouter()}>{content}</SomePage>
}
