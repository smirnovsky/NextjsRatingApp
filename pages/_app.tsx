import { AppProps } from '../node_modules/next/app';
import Head from '../node_modules/next/head';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
