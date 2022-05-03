import Gripe2 from '@/components/gripe';
import SomePage from '@/components/page';

import * as React from 'react';
import {PointDetail} from "@/components/point_detail";
import {Point} from "@/components/point";
import {useRouter} from "next/router";
import Image from 'next/image'
import scott from '@/assets/scott.png'

export default function Page() {


  var points = Array<React.Ref<Point>>();


  var content = <><section id="me">
    <h1>UBERSCOTT</h1>
    <h2>Scott Williams</h2>
    <div>
      <Image src={scott} className="article-img" alt="Scott Williams" width="480" height="225"/>
      <p><em>[scott is not nearly as serious in real life as he looks in this picture]</em></p>
    </div>
    <article id="about">
      <h2>About</h2>
      <p>Scott is passionate about creating user experiences through code.</p>
    </article>


    </section></>;


    return <SomePage next="/uberscott" router={useRouter()}>{content}</SomePage>
}
