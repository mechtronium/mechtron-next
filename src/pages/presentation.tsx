import Head from 'next/head';
import present from '@/styles/Presentation.module.css';
import Link from 'next/link';
import Gripe2 from '@/pages/gripe';

import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


type SomePageProps = {
  refs: React.Ref<Gripe2>[],
  children: React.ReactNode
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
            <header id={present.header}>
        <span>
          <Link href="/">
            <h1>MECHTRON</h1>
          </Link>
        </span>
            </header>

            <main id={present.main}>
              {this.props.children}
            </main>
          </div>

          <footer id={present.footer}>
            <Button className={present.next_button} variant="contained"><a onClick={(e) => this.next()}>Next</a></Button>
          </footer>
        </div>
      </>
    );
  }

  next() {
    var change = false;
    for( var i=0; i<this.props.refs.length; i++ ) {
      var gripe : React.Ref<Gripe2> = this.props.refs[i];
      if( gripe != null ) {
        if( gripe.current.state.show == true && gripe.current.state.details == true ) {
          gripe.current.setState( {show:true,details:false});
          change = true;
        } else
        if( gripe.current.state.show == false ) {
          gripe.current.setState( {show:true,details:true});
          return;
        }
      }
    }
    if( !change ) {
      console.log("NEXT PAGE!");
    }
  }
}
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
  </section> </>);
  return  <SomePage refs={gripes}>{blah}</SomePage>
}
