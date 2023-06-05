import HomePage from '../components/pg-home';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>useink Playground</title>
        <meta
          name='description'
          content='Playground is a sandbox for useink development and showing quick examples.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/squink.svg' />
      </Head>
      <HomePage />
    </>
  );
}
