import Head from 'next/head';
import present from '@/styles/Presentation.module.css';
import Link from 'next/link';

import * as React from 'react';
import Button from '@mui/material/Button';
import Point from "@/components/point";
import {NextRouter} from "next/router";
require("xterm/lib/xterm.js");
require("xterm/css/xterm.css");


type TermPageProps = {
}

class TermPage extends React.Component<TermPageProps, any> {
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

        <div id='terminal'/>
        <script>
          var term = new Terminal();
          term.open(document.getElementById("terminal"));
          term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
        </script>
      </>
    );
  }

  next() {
  //    this.props.router.push(this.props.next)
  }
}

export default TermPage;
