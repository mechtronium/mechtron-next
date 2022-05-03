import Head from 'next/head';
import present from '@/styles/Presentation.module.css';
import Link from 'next/link';

import * as React from 'react';
import Button from '@mui/material/Button';
import Point from "@/components/point";
import {NextRouter} from "next/router";


type SomePageProps = {
  points?: React.Ref<Point>[],
  children: React.ReactNode,
  router: NextRouter,
  next: string
}

class SomePage extends React.Component<SomePageProps, any> {
  render() {
    return (
      <>
        <Head>
          <title>TypeScript starter for Next.js</title>
          <meta
            name="description"
            content="TypeScript starter for Next.js that includes all you need to build amazing apps"
          />
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Economica:ital@1&family=Electrolize&family=Jura:wght@500&family=Keania+One&family=Open+Sans:ital,wght@1,300&family=Share:ital@1&family=Stalinist+One&family=Zen+Dots&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

        </Head>
        <div id={present.page}>
          <div id={present.content}>

            <main id={present.main}>
              {this.props.children}
            </main>
          </div>

          <footer id={present.footer}>
            <Button className={present.next_button} variant="contained"><a
              onClick={(e) => this.next()}>Next</a></Button>
          </footer>
        </div>
      </>
    );
  }

  next() {
    var change = false;
    if (this.props.points != null) {
      for (var i = 0; i < this.props.points.length; i++) {
console.log("index: "+i);
        var point: React.Ref<Point> = this.props.points[i];
        if (point != null) {
          console.log("point != null");
          if (point.current.state.show == true && point.current.state.done == false ) {
            change = point.current.nextDetailHasMore();
            if( change )
            {
              return;
            } else {

            }
          } else if (point.current.state.show == false ){

console.log("go");
            point.current.setState({show: true} );
            return;
          }
        }
      }
    } else {
      console.log("Points == null");
    }
    if (!change) {
      console.log("NEXT PAGE!");
      this.props.router.push(this.props.next)
    }
  }
}

export default SomePage;
