import Head from 'next/head';
import DeployPage from '../components/pg-deploy';

export default function Index() {
  return (
    <>
      <Head>
        <title>Playground | Deploy</title>
        <meta
          name="description"
          content="Easily deploy a contract with useink"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/squink.svg" />
      </Head>
      <DeployPage />
    </>
  );
}
