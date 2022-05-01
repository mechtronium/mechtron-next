import Head from 'next/head';
import present from '@/styles/Presentation.module.css';
import Link from "next/link";

export default function Home() {
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Economica:ital@1&family=Electrolize&family=Jura:wght@500&family=Keania+One&family=Open+Sans:ital,wght@1,300&family=Share:ital@1&family=Stalinist+One&family=Zen+Dots&display=swap"
          rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&display=swap" rel="stylesheet"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"/>

      </Head>

      <header id={present.header}>
        <Link href="/"><h1>MECHTRON</h1></Link>
      </header>

      <main id={present.main}>
        <h1>DevOps Gripes</h1>

      </main>

    </>
  );
}
