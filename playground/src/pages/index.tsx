import Head from 'next/head';
import HomePage from '@/components/pg-home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Playground</title>
        <meta name="description" content="useink Kitchen Sink" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
