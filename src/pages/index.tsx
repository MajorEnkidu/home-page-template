/** @format */

import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Content from '@/components/Content';
import Main from '@/components/Main';
import Text from '@/components/Text';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle Klus | Website</title>
        <meta
          name="description"
          content="Website of Kyle Klus."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Header />
      <Main>
        <div id={'top'}></div>
        <Content>
          <Text>
            <h1>Under Construction</h1>
            <br />
            <p>This site is currently under construction and exists solely for the purpose of not having missing pages. Please be patient until I finished creating this page.</p>
            <br />
            - With kind regards <q>Kyle Klus</q>
          </Text>
        </Content>
        <Footer />
      </Main>
    </>
  );
}
